import * as SentryLib from './sentry.js';



const environment = 'production';


const apiHost = environment === 'development' ? 'https://api-v.printfriendly.com' : 'https://api.printfriendly.com';

const defaultPageSize = 'Letter';

function initVariables(extensionRootTabId, extensionId, extensionPath, env, pageSize) {
  function setGlobalProperty(name, value) {
    if (typeof window.wrappedJSObject === 'undefined') {
      window[name] = value;
    } else {
      window.wrappedJSObject[name] = value;
    }
  }

  setGlobalProperty('extensionRootTabId', extensionRootTabId);
  setGlobalProperty('extensionId', extensionId);
  setGlobalProperty('extensionPath', extensionPath);
  setGlobalProperty('extensionPageSize', pageSize);

  if (env === 'development') {
    setGlobalProperty('pfstyle', 'lbk');
    var host = 'https://v.printfriendly.com';
    setGlobalProperty('pfOptions', {
      hosts: {
        cdn: host,
        pdf: host,
        pf: host,
        ds: host,
        email: host
      },
      environment: 'development'
    });
  } else {
    setGlobalProperty('pfstyle', 'cbk');
  }
}

async function start(tab) {
  const { pf_page_size } = await chrome.storage.local.get("pf_page_size")

  await chrome.scripting.executeScript({
    target: {tabId: tab.id},
    func: initVariables,
    args: [tab.id, chrome.runtime.id, chrome.runtime.getURL("/").replace(/\/$/, ""), environment, pf_page_size || defaultPageSize]
  });
  await chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['/assets/printfriendly.js']
  });
}

// Called when the user clicks on the browser action.
chrome.storage.local.get(["pf_icon"], ({ pf_icon }) => {
  if (pf_icon) { chrome.action.setIcon({ path: "images/" + pf_icon + ".png" }); }
});

chrome.action.onClicked.addListener(function(tab) {
  recordGAEvent({ name: "extension_navbar_start", params: {} });
  start(tab);
});

function initSentry(env) {
  if(env === 'production') {
    SentryLib.Sentry.init({
      dsn: 'https://3069916c1a6d41a49f4c663f36b1903e@o11096.ingest.sentry.io/6190364',
      tracesSampleRate: 1.0,
    });
  }
}

async function getAlreadyShownIntro() {
  const storage = await chrome.storage.local.get();
  return storage['alreadyShownIntro'];
}

async function openIntro() {
  try {
    const alreadyShownIntro = await getAlreadyShownIntro();
    if (!alreadyShownIntro) {
      chrome.tabs.create({ url: chrome.runtime.getURL('intro.html' )});
      await chrome.storage.local.set({alreadyShownIntro: true});
    }
  } catch {}
}

chrome.runtime.onInstalled.addListener(() => {
  fetch(`${apiHost}/v2/defaults`).then(response => response.json()).then(data => {
    chrome.storage.local.set({ pf_page_size: data.page_size });
  }).catch(() => chrome.storage.local.set({ pf_page_size: defaultPageSize }));

  chrome.contextMenus.create({
    id: "printfriendly",
    title: "Print Friendly and PDF",
    contexts: ["page", "selection", "link", "editable", "image", "frame"]
  });

  initSentry(environment);

  openIntro();
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === "printfriendly")
    recordGAEvent({ name: "context_menu_start", params: {} });
    start(tab);
  }
);

chrome.runtime.setUninstallURL("https://printfriendly.com/extension_feedback/new")

var PORT_NAME_MAPPINGS = {
  '': 'root',
  'pf-core': 'core',
  'algo': 'algo',
  'serviceWorker': 'serviceWorker',
};

var openConnections = {};

function connected(p) {
  if (!openConnections[p.sender.tab.id]) {
    openConnections[p.sender.tab.id] = { root: null, core: null, algo: null };
  }
  var connectedPorts = openConnections[p.sender.tab.id];

  var portName = PORT_NAME_MAPPINGS[p.name];
  connectedPorts[portName] = p

  p.onDisconnect.addListener(function(port) {
    delete connectedPorts[portName];
  });

  p.onMessage.addListener(function(m) {
    connectedPorts[m.destination].postMessage(m);
  });
}

chrome.runtime.onConnect.addListener(connected);

function sendMessageToPort(connectedPorts, request, retry = 0) {
  const port = connectedPorts[request.destination];
  if (port) {
    port.postMessage(request);
  } else {
    if (retry < 10) {
      const baseDelayMs = 100;
      const delayMs = baseDelayMs * 2 ** retry;
      setTimeout(() => sendMessageToPort(connectedPorts, request, retry + 1), delayMs);
    } else {
      console.error(`Could not send message to port ${request.destination}`);
    }
  }
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.destination === 'serviceWorker') {
    handleServiceWorkerMessage(request, sender, sendResponse);
    return;
  }
  const connectedPorts = openConnections[sender.tab.id];
  sendMessageToPort(connectedPorts, request);
});

async function recordGAEvent(data = {}) {
  const measurement_id = "G-BLWBW4RJE2";
  const api_secret = "sN8DehDvT46i0AnXGJUOLg";

  return await fetch(`https://www.google-analytics.com/mp/collect?measurement_id=${measurement_id}&api_secret=${api_secret}`, {
    method: "POST",
    body: JSON.stringify({
      client_id: 'chrome-extension.3.6.1',
      events: [data]
    })
  });
}

const inMemoryStore = {
  pfToPdfUrl: null,
};

async function handleServiceWorkerMessage(request, sender, sendResponse) {
  if(request.type === 'PfToPdf') {
    inMemoryStore.pfToPdfUrl = null;
    const formData = new FormData()
    formData.append('html', request.payload.html)
    formData.append('css_url', request.payload.css_url)
    formData.append('page_size', request.payload.page_size)
    formData.append('title', request.payload.title)
    formData.append('dir', request.payload.dir)
    formData.append('hostname', request.payload.hostname)
    formData.append('url', request.payload.url)
    formData.append('platform', request.payload.platform)
    formData.append('custom_css_url', request.payload.custom_css_url)

    const fingerprint = request.payload.extensionFingerprint;
    await chrome.storage.local.set({ pf_page_size: request.payload.page_size });
    try {
      const data = await fetch(`${apiHost}/v2/pdf/create?api_key=chrome-extension-${fingerprint}`, {
        body: formData,
        method: 'POST',
      })
        .then(response => response.json())

      if (data.status === 'success') {
        inMemoryStore.pfToPdfUrl = data.file_url;
        sendMessageToPort(openConnections[sender.tab.id], { type: 'PfPDFDownloaded', destination: 'core', payload: { pdfFileUrl: data.file_url } });
      } else {
        sendMessageToPort(openConnections[sender.tab.id], { type: 'PfPDFDownloadFail', destination: 'core' });
      }
    } catch (e) {
      sendMessageToPort(openConnections[sender.tab.id], { type: 'PfPDFDownloadFail', destination: 'core' });
    }
  } else if (request.type === 'PfPDFDownload') {
    chrome.tabs.create({ url: inMemoryStore.pfToPdfUrl, openerTabId: sender.tab.id });
  }
}
