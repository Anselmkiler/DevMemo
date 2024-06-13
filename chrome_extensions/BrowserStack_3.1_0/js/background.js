"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
/**
 * this chain of promises is required as we have some dependancy.
 * i.e need to set few thing before we use it
 */

/**
 * this file contains all the configs like function that returns
 * api-endpoint url, helpers related to tab activity
 */

var Config = {
  getDisplayNamesURL: function getDisplayNamesURL() {
    return "".concat(Config.server.address, "/os-display-names?request_source=bs_qle_chrome_extension");
  },
  getStartURL: function getStartURL() {
    return Config.server.address + "/start?utm_source=chrome&utm_medium=extension&utm_campaign=quick-launch#start=true&autofit=true&start_element=chrome_extension&request_source=bs_qle_chrome_extension";
  },
  getSuggestionsStartURL: function getSuggestionsStartURL() {
    return Config.server.address + "/start?utm_source=chrome&utm_medium=extension&utm_campaign=quick-launch#start=true&autofit=true&start_element=chrome_extension_suggestion&request_source=bs_qle_chrome_extension";
  },
  getActiveTabURL: function getActiveTabURL() {
    return new Promise(function (resolve) {
      chrome.tabs.query({
        active: true,
        currentWindow: true
      }, function (tabs) {
        if (tabs.length) {
          // In some cases there were multiple entries and the last entry
          // corresponded to the "real" active tab.
          var tab = tabs[tabs.length - 1];
          resolve({
            url: tab.url,
            isIncognito: tab.incognito
          });
        }
      });
    });
  },
  getSuggestionsURL: function getSuggestionsURL() {
    return "".concat(Config.server.address, "/recommendation/users_top_urls?request_source=bs_qle_chrome_extension");
  },
  onActiveTabChange: function onActiveTabChange(ifMatchedCallback, ifNotMatchedCallback) {
    if (!Session.isUserLoggedIn()) return;
    Config.getActiveTabURL().then(function (_ref) {
      var url = _ref.url,
        isIncognito = _ref.isIncognito;
      chrome.storage.local.get(["suggestionsList"], function (result) {
        var suggestionsList = result.suggestionsList;
        var urlObject = url ? new URL(url) : "";
        if (suggestionsList) {
          var allSuggestions = JSON.parse(suggestionsList);
          var totalSuggestions = allSuggestions.length;
          for (var i = 0; i < totalSuggestions; i++) {
            if (urlObject && urlObject.hostname.includes(allSuggestions[i].url) && allSuggestions[i].suggestions.length) {
              ifMatchedCallback(allSuggestions[i].url, allSuggestions[i].suggestions, isIncognito, url);
              break;
            } else if (typeof ifNotMatchedCallback === "function") {
              ifNotMatchedCallback();
            }
          }
        }
      });
    });
  },
  _sortSuggestions: function _sortSuggestions(suggestionData) {
    return suggestionData.sort(function (obj1, obj2) {
      return obj1.id - obj2.id;
    });
  },
  parseSugestions: function parseSugestions(suggestionData) {
    suggestionData.forEach(function (suggestionsObj) {
      suggestionsObj.suggestions = Config._sortSuggestions(suggestionsObj.suggestions.map(QuickLaunch.parse));
    });
    return suggestionData;
  },
  //Function to send data to railsApp. From their it will send data to Analytics tool
  logEvent: function logEvent() {
    chrome.storage.local.get(["events"], function (result) {
      var storedEvents = result["events"];
      var dt = new Date();
      if (storedEvents && storedEvents.data && storedEvents.data.length) {
        fetch("".concat(Config.server.address, "/recommendation/log?request_source=bs_qle_chrome_extension&source=qle_build"), {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            events: storedEvents.data,
            newInstrumentation: true
          })
        }).then(function (response) {
          if (response.status === 200) {
            chrome.storage.local.remove("events");
          }
        });
        Config.updateStorageForEventsApiData();
      }
    });
  },
  triggerAnalytics: function triggerAnalytics() {
    Session.getLoginID().then(function (isLoggedIn) {
      if (!isLoggedIn) return;
      Config.logEvent();
    });
  },
  sendEventDataInBatches: function sendEventDataInBatches() {
    Config.addEventsToStorage({
      event_name: "UserOpenedQLE",
      data: {}
    }, function () {
      if (Config.shouldSendEventApi()) {
        Config.triggerAnalytics();
      }
    });
  },
  checkBadgeData: function checkBadgeData() {
    Session.getLoginID().then(function (isLoggedIn) {
      if (!isLoggedIn) return;
      chrome.storage.local.get(["badgeDisplayedData", "badgeClickedData"], function (result) {
        if (result.badgeDisplayedData) {
          Config.addEventsToStorage({
            event_name: "ExtensionBadgeDisplayed",
            data: {
              badgeDisplayedData: result.badgeDisplayedData
            }
          });
        }
        if (result.badgeClickedData) {
          Config.addEventsToStorage({
            event_name: "ExtensionBadgeClicked",
            data: {
              badgeClickedData: result.badgeClickedData
            }
          });
        }
      });
    });
  },
  updateBadgeData: function updateBadgeData(url, badgeDataType) {
    chrome.storage.local.get([badgeDataType], function (result) {
      var badgeData = result[badgeDataType];
      badgeData = badgeData ? JSON.parse(badgeData) : {
        dataSentAt: "",
        data: []
      };
      var _badgeData = badgeData,
        data = _badgeData.data;
      var dataLength = data.length;
      if (dataLength) {
        var isNewURL = true;
        for (var i = 0; i < dataLength; i++) {
          if (url.indexOf(data[i].url) > -1) {
            //If url matches, add timestamp to data against that URL
            data[i].count.push(new Date().getTime());
            isNewURL = false;
            break;
          }
        }
        if (isNewURL) {
          //If nothing matched in existing data, push data for new URL
          data.push({
            url: url,
            count: [new Date().getTime()]
          });
        }
      } else {
        //For first time user
        data.push({
          url: url,
          count: [new Date().getTime()]
        });
      }
      chrome.storage.local.set(_defineProperty({}, badgeDataType, JSON.stringify(badgeData)));
    });
  },
  triggerSuggestions: function triggerSuggestions() {
    Session.getSessionID().then(function () {
      Config.onActiveTabChange(function (url) {
        chrome.action.setBadgeBackgroundColor({
          color: [0, 156, 252, 1]
        });
        chrome.action.setBadgeText({
          text: "RE"
        });
        Config.updateBadgeData(url, "badgeDisplayedData");
      }, function () {
        chrome.action.setBadgeText({
          text: ""
        });
      });
    });
  },
  fetchSuggestions: function fetchSuggestions() {
    Session.getLoginID().then(function (isLoggedIn) {
      if (!isLoggedIn) return;
      chrome.storage.local.get(["suggestionsFetched"], function (result) {
        var suggestionsFetched = result.suggestionsFetched;
        var today = new Date().toLocaleDateString();
        if (suggestionsFetched !== today) {
          var url = Config.getSuggestionsURL();
          fetch(url).then(function (response) {
            return response.json();
          }).then(function (res) {
            var parsedValue = JSON.stringify(Config.parseSugestions(res.data.topUrls));
            chrome.storage.local.set({
              suggestionsList: parsedValue,
              suggestionsFetched: today,
              isTopURLModalSeen: res.data.qle_top_urls_modal_seen
            });
            if (!res.data.topUrls.length) {
              chrome.action.setBadgeText({
                text: ""
              });
            }
          });
        }
      });
    });
  },
  updateExtension: function updateExtension(quickLaunches) {
    chrome.storage.local.get(["displayNamesJSON"], function (result) {
      if (result.displayNamesJSON && quickLaunches) {
        chrome.runtime.sendMessage({
          type: "SET_QL",
          data: quickLaunches
        });
        if (DisplayNames.isMissing()) {
          DisplayNames.fetchDisplayNames().then(function () {
            chrome.runtime.sendMessage({
              type: "SET_QL",
              data: quickLaunches
            });
            chrome.runtime.sendMessage({
              type: "SAVE_QL_CACHE"
            });
            chrome.runtime.sendMessage({
              type: "UPDATE"
            });
          });
        } else {
          chrome.runtime.sendMessage({
            type: "SAVE_QL_CACHE"
          });
          chrome.runtime.sendMessage({
            type: "UPDATE"
          });
        }
      }
    });
  },
  shouldSendExpApi: function shouldSendExpApi() {
    var timeStampFromStorage = localStorage.getItem("expApiCallTimestamp");
    if (!timeStampFromStorage) return true;
    var apiCallTime = parseInt(timeStampFromStorage, 10);
    var currTime = new Date().getTime();
    var diffInMinutes = Math.abs(Math.round((currTime - apiCallTime) / 1000 / 60));

    // send API call only after 60mins have passed since last call
    return diffInMinutes > 60;
  },
  shouldSendEventApi: function shouldSendEventApi() {
    var timeStampFromStorage = localStorage.getItem("eventsApiCallTimestamp");
    var apiCallCountFromStorage = localStorage.getItem("eventsApiCallCount");
    if (!timeStampFromStorage) {
      return true;
    } else {
      var apiCallTime = parseInt(timeStampFromStorage, 10);
      var apiCallCount = parseInt(apiCallCountFromStorage, 10);
      var currTime = new Date().getTime();
      var diffInMinutes = Math.abs(Math.round((currTime - apiCallTime) / 1000 / 60));

      // send API call only max 5 times in 1hr

      if (apiCallCount >= 5) {
        if (diffInMinutes < 60) {
          return false;
        } else {
          localStorage.removeItem("eventsApiCallCount");
          return true;
        }
      } else {
        return true;
      }
    }
  },
  updateStorageForEventsApiData: function updateStorageForEventsApiData() {
    var timeStamp = new Date().getTime();
    var count = localStorage.getItem("eventsApiCallCount");
    var newCount = count ? parseInt(count, 10) + 1 : 1;
    localStorage.setItem("eventsApiCallTimestamp", timeStamp);
    localStorage.setItem("eventsApiCallCount", newCount);
  },
  fetchQLEReorderingExperiment: function fetchQLEReorderingExperiment() {
    var BASE_URL = Config.server.subDomain === "local" ? Config.server.addressForLivePrefix : Config.server.address;
    var currTime = new Date().getTime();
    if (Config.shouldSendExpApi()) {
      fetch("".concat(BASE_URL, "/get_quick_launch_reordering_experiment_value")).then(function (response) {
        return response.json();
      }).then(function (data) {
        localStorage.setItem("expApiCallTimestamp", currTime);
        chrome.storage.local.set({
          isQuickLauncheOrderingExpEnabled: data.value
        });
      })["catch"](function (error) {
        localStorage.setItem("expApiCallTimestamp", currTime);
        chrome.storage.local.set({
          isQuickLauncheOrderingExpEnabled: false
        });
      });
    }
  },
  addEventsToStorage: function addEventsToStorage(payload, callback) {
    chrome.storage.local.get(["events"], function (result) {
      var storedEvents = result["events"];
      payload.data.eds_timestamp = new Date().toUTCString();
      storedEvents = storedEvents ? storedEvents : {
        data: []
      };
      storedEvents.data.push(payload);
      chrome.storage.local.set(_defineProperty({}, "events", storedEvents));
      callback && callback();
    });
  },
  init: function init() {
    return fetch("../config.json").then(function (response) {
      return response.json();
    }).then(function (res) {
      Object.assign(Config, res);
    });
  }
};

//=require config.js

var DisplayNames = function () {
  var displayNames;
  var _isMissing = false;
  var fetchDisplayNames = function fetchDisplayNames() {
    var url = Config.getDisplayNamesURL();
    fetch(url).then(function (response) {
      return response.json();
    }).then(function (data) {
      displayNames = data;
      saveDisplayNamesCache();
    });
  };
  var loadDisplayNamesCache = function loadDisplayNamesCache() {
    return new Promise(function (resolve) {
      chrome.storage.local.get(["displayNamesJSON"], function (result) {
        var parsedValue = result.displayNamesJSON;
        displayNames = parsedValue;
        resolve(parsedValue);
      });
    });
  };
  var saveDisplayNamesCache = function saveDisplayNamesCache() {
    chrome.storage.local.set({
      displayNamesJSON: displayNames
    });
  };
  var getDisplayName = function getDisplayName(os) {
    var displayName = displayNames[os];
    if (!displayName) {
      displayName = "Unknown";
      _isMissing = true;
    }
    return displayName;
  };
  var init = function init() {
    return new Promise(function (resolve) {
      chrome.storage.local.get(["displayNamesJSON"], function (result) {
        var parsedValue = result.displayNamesJSON;
        displayNames = parsedValue;
        if (parsedValue) {
          resolve(loadDisplayNamesCache());
        } else {
          resolve(fetchDisplayNames());
        }
      });
    });
  };
  return {
    fetchDisplayNames: fetchDisplayNames,
    loadDisplayNamesCache: loadDisplayNamesCache,
    saveDisplayNamesCache: saveDisplayNamesCache,
    getDisplayName: getDisplayName,
    isMissing: function isMissing() {
      return _isMissing;
    },
    init: init
  };
}();

//=require config.js

var Session = function () {
  var sessionID;
  var loginID;
  var getQuickLaunchURL = function getQuickLaunchURL() {
    return Config.server.address + "/extension-popup" + (loginID && sessionID ? "/".concat(sessionID, ".json") : ".json");
  };
  var getSessionID = function getSessionID() {
    return new Promise(function (resolve) {
      chrome.cookies.get({
        url: getQuickLaunchURL(),
        name: "".concat(Config.server.cookiePrefix, "_session")
      }, function (cookie) {
        sessionID = cookie ? cookie.value : "";
        resolve();
      });
    });
  };
  var getLoginID = function getLoginID() {
    return new Promise(function (resolve) {
      chrome.cookies.get({
        url: getQuickLaunchURL(),
        name: Config.server.cookiePrefix + (Config.server.cookiePrefix ? "___" : "") + "bs_logging_id"
      }, function (cookie) {
        loginID = cookie ? cookie.value : "";
        resolve(loginID);
      });
    });
  };
  var isUserLoggedIn = function isUserLoggedIn() {
    return Boolean(sessionID);
  };

  // Uses cookie which gets removed on logout immediately and populated back on login
  var isUserActuallyLoggedIn = function isUserActuallyLoggedIn() {
    Session.getLoginID();
    return Boolean(loginID);
  };
  var clear = function clear() {
    return chrome.cookies.remove({
      url: getQuickLaunchURL(),
      name: "".concat(Config.server.cookiePrefix, "_session")
    });
  };
  var init = function init() {
    return getSessionID().then(getLoginID);
  };
  return {
    getQuickLaunchURL: getQuickLaunchURL,
    getLoginID: getLoginID,
    isUserActuallyLoggedIn: isUserActuallyLoggedIn,
    isUserLoggedIn: isUserLoggedIn,
    getSessionID: getSessionID,
    clear: clear,
    init: init
  };
}();

//=require config.js
//=require models/DisplayNames.js

var QuickLaunch = {
  quickLaunchDefaults: {
    id: 0,
    name: "",
    version: "",
    versionName: "",
    options: {},
    disabled: false,
    disabled_message: ""
  },
  quickLaunch: function quickLaunch(_quickLaunch) {
    this.id = _quickLaunch.id;
    this.name = _quickLaunch.name;
    this.version = _quickLaunch.version;
    this.versionName = _quickLaunch.versionName;
    this.options = _quickLaunch.options;
    this.disabled = _quickLaunch.disabled;
    this.disabled_message = _quickLaunch.disabled_message;
  },
  init: function init(quickLaunch) {
    return QuickLaunch.quickLaunch(Object.assign({}, QuickLaunch.quickLaunchDefaults, quickLaunch));
  },
  parse: function parse(data) {
    var quickLaunch = Object.assign({}, QuickLaunch.quickLaunchDefaults, {
      id: data.id,
      versionName: data.version_name || "",
      options: {
        browser: data.browser,
        browser_version: data.browser_version || 0,
        os: data.os,
        os_version: data.os_version || 0
      },
      disabled: data.disabled || false,
      disabled_message: data.disabled_message || ""
    });
    var displayName = DisplayNames.getDisplayName(data.os);
    if (["mobile", "tablet"].indexOf(data.browser) > -1) {
      var device = data.device.split("-");
      quickLaunch.options.device = device[0];
      quickLaunch.options.os = displayName;
      quickLaunch.options.os_version = quickLaunch.options.browser_version = device[1];
      if (["iOS", "Windows Phone"].indexOf(quickLaunch.options.os) === -1) {
        var nameSplit = quickLaunch.options.device.split(" ");
        quickLaunch.name = (nameSplit.length > 2 ? nameSplit.slice(1) : nameSplit).join(" ");
      } else {
        quickLaunch.name = quickLaunch.options.device;
        if (quickLaunch.options.os === "Windows Phone") {
          quickLaunch.options.os = "Winphone";
        }
      }
    } else {
      if (displayName !== "Unknown") {
        quickLaunch.name = displayName;
        var osInfo = quickLaunch.name.match(/(OS X|macOS|Windows) (.*)/);
        quickLaunch.options.os = osInfo[1];
        if (quickLaunch.options.os === "macOS") {
          quickLaunch.options.os = "OS X";
        }
        quickLaunch.options.os_version = osInfo[2];
      }
    }
    quickLaunch.version = Number(quickLaunch.options.browser_version);
    if (isNaN(quickLaunch.version)) {
      if (quickLaunch.options.browser_version.toLowerCase() === "insider preview") {
        quickLaunch.version = "IP";
      } else if (quickLaunch.versionName.toLowerCase() === "techpreview") {
        quickLaunch.version = "TP";
      } else if (quickLaunch.options.browser_version.toLowerCase().indexOf("metro") > -1) {
        quickLaunch.version = Number(quickLaunch.options.browser_version.split(" ")[0]);
        quickLaunch.versionName = "metro";
      } else {
        quickLaunch.version = quickLaunch.options.browser_version;
      }
    }
    if (["beta", "dev", "techpreview"].indexOf(quickLaunch.versionName.toLowerCase()) > -1) {
      quickLaunch.options.browser_version += " " + quickLaunch.versionName;
      if (quickLaunch.versionName.toLowerCase() === "techpreview") {
        quickLaunch.versionName = "";
      }
    }
    return quickLaunch;
  }
};
Config.init().then(function () {
  return DisplayNames.init();
}).then(function () {
  return Session.init();
}).then(function () {
  // messages coming from live dashboard.
  chrome.runtime.onMessageExternal.addListener(function (request, sender, sendResponse) {
    switch (request.type) {
      case "UPDATE":
        Config.updateExtension(request.quickLaunches);
        break;
      case "SIGN_OUT":
        chrome.runtime.sendMessage({
          type: "DELETE_QL_CACHE"
        });
        Session.clear();
        break;
      case "installStatus":
        sendResponse({
          installed: true,
          version: chrome.runtime.getManifest().version
        });
        break;
      default:
        break;
    }
  });
}).then(function () {
  /**
   * we fetch the suggestions and send some data to railsapp
   */
  Config.fetchSuggestions();
  Config.checkBadgeData();
  setInterval(function () {
    Config.fetchSuggestions();
    Config.checkBadgeData();
  }, 1000 * 60 * 60 * 6); //Check in 6 hrs if it's new day and fetch suggestions

  // Actions on tab change
  chrome.tabs.onActivated.addListener(function () {
    Config.triggerSuggestions();
  });
  chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == "complete" && tab.status == "complete") {
      Config.triggerSuggestions();
    }
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm5hbWVzIjpbIkNvbmZpZyIsImdldERpc3BsYXlOYW1lc1VSTCIsInNlcnZlciIsImFkZHJlc3MiLCJnZXRTdGFydFVSTCIsImdldFN1Z2dlc3Rpb25zU3RhcnRVUkwiLCJnZXRBY3RpdmVUYWJVUkwiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNocm9tZSIsInRhYnMiLCJxdWVyeSIsImFjdGl2ZSIsImN1cnJlbnRXaW5kb3ciLCJsZW5ndGgiLCJ0YWIiLCJ1cmwiLCJpc0luY29nbml0byIsImluY29nbml0byIsImdldFN1Z2dlc3Rpb25zVVJMIiwib25BY3RpdmVUYWJDaGFuZ2UiLCJpZk1hdGNoZWRDYWxsYmFjayIsImlmTm90TWF0Y2hlZENhbGxiYWNrIiwiU2Vzc2lvbiIsImlzVXNlckxvZ2dlZEluIiwidGhlbiIsInN0b3JhZ2UiLCJsb2NhbCIsImdldCIsInJlc3VsdCIsInN1Z2dlc3Rpb25zTGlzdCIsInVybE9iamVjdCIsIlVSTCIsImFsbFN1Z2dlc3Rpb25zIiwiSlNPTiIsInBhcnNlIiwidG90YWxTdWdnZXN0aW9ucyIsImkiLCJob3N0bmFtZSIsImluY2x1ZGVzIiwic3VnZ2VzdGlvbnMiLCJfc29ydFN1Z2dlc3Rpb25zIiwic3VnZ2VzdGlvbkRhdGEiLCJzb3J0Iiwib2JqMSIsIm9iajIiLCJpZCIsInBhcnNlU3VnZXN0aW9ucyIsImZvckVhY2giLCJzdWdnZXN0aW9uc09iaiIsIm1hcCIsIlF1aWNrTGF1bmNoIiwibG9nRXZlbnQiLCJzdG9yZWRFdmVudHMiLCJkdCIsIkRhdGUiLCJkYXRhIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsInN0cmluZ2lmeSIsImV2ZW50cyIsIm5ld0luc3RydW1lbnRhdGlvbiIsInJlc3BvbnNlIiwic3RhdHVzIiwicmVtb3ZlIiwidXBkYXRlU3RvcmFnZUZvckV2ZW50c0FwaURhdGEiLCJ0cmlnZ2VyQW5hbHl0aWNzIiwiZ2V0TG9naW5JRCIsImlzTG9nZ2VkSW4iLCJzZW5kRXZlbnREYXRhSW5CYXRjaGVzIiwiYWRkRXZlbnRzVG9TdG9yYWdlIiwiZXZlbnRfbmFtZSIsInNob3VsZFNlbmRFdmVudEFwaSIsImNoZWNrQmFkZ2VEYXRhIiwiYmFkZ2VEaXNwbGF5ZWREYXRhIiwiYmFkZ2VDbGlja2VkRGF0YSIsInVwZGF0ZUJhZGdlRGF0YSIsImJhZGdlRGF0YVR5cGUiLCJiYWRnZURhdGEiLCJkYXRhU2VudEF0IiwiZGF0YUxlbmd0aCIsImlzTmV3VVJMIiwiaW5kZXhPZiIsImNvdW50IiwicHVzaCIsImdldFRpbWUiLCJzZXQiLCJ0cmlnZ2VyU3VnZ2VzdGlvbnMiLCJnZXRTZXNzaW9uSUQiLCJhY3Rpb24iLCJzZXRCYWRnZUJhY2tncm91bmRDb2xvciIsImNvbG9yIiwic2V0QmFkZ2VUZXh0IiwidGV4dCIsImZldGNoU3VnZ2VzdGlvbnMiLCJzdWdnZXN0aW9uc0ZldGNoZWQiLCJ0b2RheSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImpzb24iLCJyZXMiLCJwYXJzZWRWYWx1ZSIsInRvcFVybHMiLCJpc1RvcFVSTE1vZGFsU2VlbiIsInFsZV90b3BfdXJsc19tb2RhbF9zZWVuIiwidXBkYXRlRXh0ZW5zaW9uIiwicXVpY2tMYXVuY2hlcyIsImRpc3BsYXlOYW1lc0pTT04iLCJydW50aW1lIiwic2VuZE1lc3NhZ2UiLCJ0eXBlIiwiRGlzcGxheU5hbWVzIiwiaXNNaXNzaW5nIiwiZmV0Y2hEaXNwbGF5TmFtZXMiLCJzaG91bGRTZW5kRXhwQXBpIiwidGltZVN0YW1wRnJvbVN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYXBpQ2FsbFRpbWUiLCJwYXJzZUludCIsImN1cnJUaW1lIiwiZGlmZkluTWludXRlcyIsIk1hdGgiLCJhYnMiLCJyb3VuZCIsImFwaUNhbGxDb3VudEZyb21TdG9yYWdlIiwiYXBpQ2FsbENvdW50IiwicmVtb3ZlSXRlbSIsInRpbWVTdGFtcCIsIm5ld0NvdW50Iiwic2V0SXRlbSIsImZldGNoUUxFUmVvcmRlcmluZ0V4cGVyaW1lbnQiLCJCQVNFX1VSTCIsInN1YkRvbWFpbiIsImFkZHJlc3NGb3JMaXZlUHJlZml4IiwiaXNRdWlja0xhdW5jaGVPcmRlcmluZ0V4cEVuYWJsZWQiLCJ2YWx1ZSIsImVycm9yIiwicGF5bG9hZCIsImNhbGxiYWNrIiwiZWRzX3RpbWVzdGFtcCIsInRvVVRDU3RyaW5nIiwiaW5pdCIsIk9iamVjdCIsImFzc2lnbiIsImRpc3BsYXlOYW1lcyIsInNhdmVEaXNwbGF5TmFtZXNDYWNoZSIsImxvYWREaXNwbGF5TmFtZXNDYWNoZSIsImdldERpc3BsYXlOYW1lIiwib3MiLCJkaXNwbGF5TmFtZSIsInNlc3Npb25JRCIsImxvZ2luSUQiLCJnZXRRdWlja0xhdW5jaFVSTCIsImNvb2tpZXMiLCJuYW1lIiwiY29va2llUHJlZml4IiwiY29va2llIiwiQm9vbGVhbiIsImlzVXNlckFjdHVhbGx5TG9nZ2VkSW4iLCJjbGVhciIsInF1aWNrTGF1bmNoRGVmYXVsdHMiLCJ2ZXJzaW9uIiwidmVyc2lvbk5hbWUiLCJvcHRpb25zIiwiZGlzYWJsZWQiLCJkaXNhYmxlZF9tZXNzYWdlIiwicXVpY2tMYXVuY2giLCJ2ZXJzaW9uX25hbWUiLCJicm93c2VyIiwiYnJvd3Nlcl92ZXJzaW9uIiwib3NfdmVyc2lvbiIsImRldmljZSIsInNwbGl0IiwibmFtZVNwbGl0Iiwic2xpY2UiLCJqb2luIiwib3NJbmZvIiwibWF0Y2giLCJOdW1iZXIiLCJpc05hTiIsInRvTG93ZXJDYXNlIiwib25NZXNzYWdlRXh0ZXJuYWwiLCJhZGRMaXN0ZW5lciIsInJlcXVlc3QiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJpbnN0YWxsZWQiLCJnZXRNYW5pZmVzdCIsInNldEludGVydmFsIiwib25BY3RpdmF0ZWQiLCJvblVwZGF0ZWQiLCJ0YWJJZCIsImNoYW5nZUluZm8iXSwic291cmNlcyI6WyJiYWNrZ3JvdW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogdGhpcyBjaGFpbiBvZiBwcm9taXNlcyBpcyByZXF1aXJlZCBhcyB3ZSBoYXZlIHNvbWUgZGVwZW5kYW5jeS5cbiAqIGkuZSBuZWVkIHRvIHNldCBmZXcgdGhpbmcgYmVmb3JlIHdlIHVzZSBpdFxuICovXG5cbi8qKlxuICogdGhpcyBmaWxlIGNvbnRhaW5zIGFsbCB0aGUgY29uZmlncyBsaWtlIGZ1bmN0aW9uIHRoYXQgcmV0dXJuc1xuICogYXBpLWVuZHBvaW50IHVybCwgaGVscGVycyByZWxhdGVkIHRvIHRhYiBhY3Rpdml0eVxuICovXG5cbmNvbnN0IENvbmZpZyA9IHtcbiAgZ2V0RGlzcGxheU5hbWVzVVJMOiAoKSA9PiB7XG4gICAgcmV0dXJuIGAke0NvbmZpZy5zZXJ2ZXIuYWRkcmVzc30vb3MtZGlzcGxheS1uYW1lcz9yZXF1ZXN0X3NvdXJjZT1ic19xbGVfY2hyb21lX2V4dGVuc2lvbmA7XG4gIH0sXG5cbiAgZ2V0U3RhcnRVUkw6ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgQ29uZmlnLnNlcnZlci5hZGRyZXNzICtcbiAgICAgIFwiL3N0YXJ0P3V0bV9zb3VyY2U9Y2hyb21lJnV0bV9tZWRpdW09ZXh0ZW5zaW9uJnV0bV9jYW1wYWlnbj1xdWljay1sYXVuY2gjc3RhcnQ9dHJ1ZSZhdXRvZml0PXRydWUmc3RhcnRfZWxlbWVudD1jaHJvbWVfZXh0ZW5zaW9uJnJlcXVlc3Rfc291cmNlPWJzX3FsZV9jaHJvbWVfZXh0ZW5zaW9uXCJcbiAgICApO1xuICB9LFxuXG4gIGdldFN1Z2dlc3Rpb25zU3RhcnRVUkw6ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgQ29uZmlnLnNlcnZlci5hZGRyZXNzICtcbiAgICAgIFwiL3N0YXJ0P3V0bV9zb3VyY2U9Y2hyb21lJnV0bV9tZWRpdW09ZXh0ZW5zaW9uJnV0bV9jYW1wYWlnbj1xdWljay1sYXVuY2gjc3RhcnQ9dHJ1ZSZhdXRvZml0PXRydWUmc3RhcnRfZWxlbWVudD1jaHJvbWVfZXh0ZW5zaW9uX3N1Z2dlc3Rpb24mcmVxdWVzdF9zb3VyY2U9YnNfcWxlX2Nocm9tZV9leHRlbnNpb25cIlxuICAgICk7XG4gIH0sXG5cbiAgZ2V0QWN0aXZlVGFiVVJMOiAoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBjaHJvbWUudGFicy5xdWVyeShcbiAgICAgICAge1xuICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICBjdXJyZW50V2luZG93OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICAodGFicykgPT4ge1xuICAgICAgICAgIGlmICh0YWJzLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gSW4gc29tZSBjYXNlcyB0aGVyZSB3ZXJlIG11bHRpcGxlIGVudHJpZXMgYW5kIHRoZSBsYXN0IGVudHJ5XG4gICAgICAgICAgICAvLyBjb3JyZXNwb25kZWQgdG8gdGhlIFwicmVhbFwiIGFjdGl2ZSB0YWIuXG4gICAgICAgICAgICBjb25zdCB0YWIgPSB0YWJzW3RhYnMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICByZXNvbHZlKHsgdXJsOiB0YWIudXJsLCBpc0luY29nbml0bzogdGFiLmluY29nbml0byB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSk7XG4gIH0sXG5cbiAgZ2V0U3VnZ2VzdGlvbnNVUkw6ICgpID0+IHtcbiAgICByZXR1cm4gYCR7Q29uZmlnLnNlcnZlci5hZGRyZXNzfS9yZWNvbW1lbmRhdGlvbi91c2Vyc190b3BfdXJscz9yZXF1ZXN0X3NvdXJjZT1ic19xbGVfY2hyb21lX2V4dGVuc2lvbmA7XG4gIH0sXG5cbiAgb25BY3RpdmVUYWJDaGFuZ2U6IChpZk1hdGNoZWRDYWxsYmFjaywgaWZOb3RNYXRjaGVkQ2FsbGJhY2spID0+IHtcbiAgICBpZiAoIVNlc3Npb24uaXNVc2VyTG9nZ2VkSW4oKSkgcmV0dXJuO1xuICAgIENvbmZpZy5nZXRBY3RpdmVUYWJVUkwoKS50aGVuKCh7IHVybCwgaXNJbmNvZ25pdG8gfSkgPT4ge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFtcInN1Z2dlc3Rpb25zTGlzdFwiXSwgKHJlc3VsdCkgPT4ge1xuICAgICAgICBjb25zdCBzdWdnZXN0aW9uc0xpc3QgPSByZXN1bHQuc3VnZ2VzdGlvbnNMaXN0O1xuICAgICAgICBjb25zdCB1cmxPYmplY3QgPSB1cmwgPyBuZXcgVVJMKHVybCkgOiBcIlwiO1xuICAgICAgICBpZiAoc3VnZ2VzdGlvbnNMaXN0KSB7XG4gICAgICAgICAgY29uc3QgYWxsU3VnZ2VzdGlvbnMgPSBKU09OLnBhcnNlKHN1Z2dlc3Rpb25zTGlzdCk7XG4gICAgICAgICAgY29uc3QgdG90YWxTdWdnZXN0aW9ucyA9IGFsbFN1Z2dlc3Rpb25zLmxlbmd0aDtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsU3VnZ2VzdGlvbnM7IGkrKykge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICB1cmxPYmplY3QgJiZcbiAgICAgICAgICAgICAgdXJsT2JqZWN0Lmhvc3RuYW1lLmluY2x1ZGVzKGFsbFN1Z2dlc3Rpb25zW2ldLnVybCkgJiZcbiAgICAgICAgICAgICAgYWxsU3VnZ2VzdGlvbnNbaV0uc3VnZ2VzdGlvbnMubGVuZ3RoXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgaWZNYXRjaGVkQ2FsbGJhY2soXG4gICAgICAgICAgICAgICAgYWxsU3VnZ2VzdGlvbnNbaV0udXJsLFxuICAgICAgICAgICAgICAgIGFsbFN1Z2dlc3Rpb25zW2ldLnN1Z2dlc3Rpb25zLFxuICAgICAgICAgICAgICAgIGlzSW5jb2duaXRvLFxuICAgICAgICAgICAgICAgIHVybFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGlmTm90TWF0Y2hlZENhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgaWZOb3RNYXRjaGVkQ2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuXG4gIF9zb3J0U3VnZ2VzdGlvbnM6IChzdWdnZXN0aW9uRGF0YSkgPT4ge1xuICAgIHJldHVybiBzdWdnZXN0aW9uRGF0YS5zb3J0KChvYmoxLCBvYmoyKSA9PiB7XG4gICAgICByZXR1cm4gb2JqMS5pZCAtIG9iajIuaWQ7XG4gICAgfSk7XG4gIH0sXG5cbiAgcGFyc2VTdWdlc3Rpb25zOiAoc3VnZ2VzdGlvbkRhdGEpID0+IHtcbiAgICBzdWdnZXN0aW9uRGF0YS5mb3JFYWNoKChzdWdnZXN0aW9uc09iaikgPT4ge1xuICAgICAgc3VnZ2VzdGlvbnNPYmouc3VnZ2VzdGlvbnMgPSBDb25maWcuX3NvcnRTdWdnZXN0aW9ucyhcbiAgICAgICAgc3VnZ2VzdGlvbnNPYmouc3VnZ2VzdGlvbnMubWFwKFF1aWNrTGF1bmNoLnBhcnNlKVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzdWdnZXN0aW9uRGF0YTtcbiAgfSxcblxuICAvL0Z1bmN0aW9uIHRvIHNlbmQgZGF0YSB0byByYWlsc0FwcC4gRnJvbSB0aGVpciBpdCB3aWxsIHNlbmQgZGF0YSB0byBBbmFseXRpY3MgdG9vbFxuICBsb2dFdmVudDogKCkgPT4ge1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbXCJldmVudHNcIl0sIChyZXN1bHQpID0+IHtcbiAgICAgIGNvbnN0IHN0b3JlZEV2ZW50cyA9IHJlc3VsdFtcImV2ZW50c1wiXTtcbiAgICAgIGNvbnN0IGR0ID0gbmV3IERhdGUoKTtcbiAgICAgIGlmIChzdG9yZWRFdmVudHMgJiYgc3RvcmVkRXZlbnRzLmRhdGEgJiYgc3RvcmVkRXZlbnRzLmRhdGEubGVuZ3RoKSB7XG4gICAgICAgIGZldGNoKFxuICAgICAgICAgIGAke0NvbmZpZy5zZXJ2ZXIuYWRkcmVzc30vcmVjb21tZW5kYXRpb24vbG9nP3JlcXVlc3Rfc291cmNlPWJzX3FsZV9jaHJvbWVfZXh0ZW5zaW9uJnNvdXJjZT1xbGVfYnVpbGRgLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgZXZlbnRzOiBzdG9yZWRFdmVudHMuZGF0YSxcbiAgICAgICAgICAgICAgbmV3SW5zdHJ1bWVudGF0aW9uOiB0cnVlLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgfVxuICAgICAgICApLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5yZW1vdmUoXCJldmVudHNcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgQ29uZmlnLnVwZGF0ZVN0b3JhZ2VGb3JFdmVudHNBcGlEYXRhKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgdHJpZ2dlckFuYWx5dGljczogKCkgPT4ge1xuICAgIFNlc3Npb24uZ2V0TG9naW5JRCgpLnRoZW4oKGlzTG9nZ2VkSW4pID0+IHtcbiAgICAgIGlmICghaXNMb2dnZWRJbikgcmV0dXJuO1xuXG4gICAgICBDb25maWcubG9nRXZlbnQoKTtcbiAgICB9KTtcbiAgfSxcblxuICBzZW5kRXZlbnREYXRhSW5CYXRjaGVzOiAoKSA9PiB7XG4gICAgQ29uZmlnLmFkZEV2ZW50c1RvU3RvcmFnZSh7IGV2ZW50X25hbWU6IFwiVXNlck9wZW5lZFFMRVwiLCBkYXRhOiB7fSB9LCAoKSA9PiB7XG4gICAgICBpZiAoQ29uZmlnLnNob3VsZFNlbmRFdmVudEFwaSgpKSB7XG4gICAgICAgIENvbmZpZy50cmlnZ2VyQW5hbHl0aWNzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgY2hlY2tCYWRnZURhdGE6ICgpID0+IHtcbiAgICBTZXNzaW9uLmdldExvZ2luSUQoKS50aGVuKChpc0xvZ2dlZEluKSA9PiB7XG4gICAgICBpZiAoIWlzTG9nZ2VkSW4pIHJldHVybjtcbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChcbiAgICAgICAgW1wiYmFkZ2VEaXNwbGF5ZWREYXRhXCIsIFwiYmFkZ2VDbGlja2VkRGF0YVwiXSxcbiAgICAgICAgKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIGlmIChyZXN1bHQuYmFkZ2VEaXNwbGF5ZWREYXRhKSB7XG4gICAgICAgICAgICBDb25maWcuYWRkRXZlbnRzVG9TdG9yYWdlKHtcbiAgICAgICAgICAgICAgZXZlbnRfbmFtZTogXCJFeHRlbnNpb25CYWRnZURpc3BsYXllZFwiLFxuICAgICAgICAgICAgICBkYXRhOiB7IGJhZGdlRGlzcGxheWVkRGF0YTogcmVzdWx0LmJhZGdlRGlzcGxheWVkRGF0YSB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHQuYmFkZ2VDbGlja2VkRGF0YSkge1xuICAgICAgICAgICAgQ29uZmlnLmFkZEV2ZW50c1RvU3RvcmFnZSh7XG4gICAgICAgICAgICAgIGV2ZW50X25hbWU6IFwiRXh0ZW5zaW9uQmFkZ2VDbGlja2VkXCIsXG4gICAgICAgICAgICAgIGRhdGE6IHsgYmFkZ2VDbGlja2VkRGF0YTogcmVzdWx0LmJhZGdlQ2xpY2tlZERhdGEgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9KTtcbiAgfSxcblxuICB1cGRhdGVCYWRnZURhdGE6ICh1cmwsIGJhZGdlRGF0YVR5cGUpID0+IHtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoW2JhZGdlRGF0YVR5cGVdLCAocmVzdWx0KSA9PiB7XG4gICAgICBsZXQgYmFkZ2VEYXRhID0gcmVzdWx0W2JhZGdlRGF0YVR5cGVdO1xuICAgICAgYmFkZ2VEYXRhID0gYmFkZ2VEYXRhXG4gICAgICAgID8gSlNPTi5wYXJzZShiYWRnZURhdGEpXG4gICAgICAgIDoge1xuICAgICAgICAgICAgZGF0YVNlbnRBdDogXCJcIixcbiAgICAgICAgICAgIGRhdGE6IFtdLFxuICAgICAgICAgIH07XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGJhZGdlRGF0YTtcbiAgICAgIGNvbnN0IGRhdGFMZW5ndGggPSBkYXRhLmxlbmd0aDtcbiAgICAgIGlmIChkYXRhTGVuZ3RoKSB7XG4gICAgICAgIGxldCBpc05ld1VSTCA9IHRydWU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YUxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHVybC5pbmRleE9mKGRhdGFbaV0udXJsKSA+IC0xKSB7XG4gICAgICAgICAgICAvL0lmIHVybCBtYXRjaGVzLCBhZGQgdGltZXN0YW1wIHRvIGRhdGEgYWdhaW5zdCB0aGF0IFVSTFxuICAgICAgICAgICAgZGF0YVtpXS5jb3VudC5wdXNoKG5ldyBEYXRlKCkuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgIGlzTmV3VVJMID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTmV3VVJMKSB7XG4gICAgICAgICAgLy9JZiBub3RoaW5nIG1hdGNoZWQgaW4gZXhpc3RpbmcgZGF0YSwgcHVzaCBkYXRhIGZvciBuZXcgVVJMXG4gICAgICAgICAgZGF0YS5wdXNoKHtcbiAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgIGNvdW50OiBbbmV3IERhdGUoKS5nZXRUaW1lKCldLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL0ZvciBmaXJzdCB0aW1lIHVzZXJcbiAgICAgICAgZGF0YS5wdXNoKHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgY291bnQ6IFtuZXcgRGF0ZSgpLmdldFRpbWUoKV0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHtcbiAgICAgICAgW2JhZGdlRGF0YVR5cGVdOiBKU09OLnN0cmluZ2lmeShiYWRnZURhdGEpLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG5cbiAgdHJpZ2dlclN1Z2dlc3Rpb25zOiAoKSA9PiB7XG4gICAgU2Vzc2lvbi5nZXRTZXNzaW9uSUQoKS50aGVuKCgpID0+IHtcbiAgICAgIENvbmZpZy5vbkFjdGl2ZVRhYkNoYW5nZShcbiAgICAgICAgKHVybCkgPT4ge1xuICAgICAgICAgIGNocm9tZS5hY3Rpb24uc2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3Ioe1xuICAgICAgICAgICAgY29sb3I6IFswLCAxNTYsIDI1MiwgMV0sXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY2hyb21lLmFjdGlvbi5zZXRCYWRnZVRleHQoeyB0ZXh0OiBcIlJFXCIgfSk7XG4gICAgICAgICAgQ29uZmlnLnVwZGF0ZUJhZGdlRGF0YSh1cmwsIFwiYmFkZ2VEaXNwbGF5ZWREYXRhXCIpO1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgY2hyb21lLmFjdGlvbi5zZXRCYWRnZVRleHQoeyB0ZXh0OiBcIlwiIH0pO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0pO1xuICB9LFxuXG4gIGZldGNoU3VnZ2VzdGlvbnM6ICgpID0+IHtcbiAgICBTZXNzaW9uLmdldExvZ2luSUQoKS50aGVuKChpc0xvZ2dlZEluKSA9PiB7XG4gICAgICBpZiAoIWlzTG9nZ2VkSW4pIHJldHVybjtcblxuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFtcInN1Z2dlc3Rpb25zRmV0Y2hlZFwiXSwgKHJlc3VsdCkgPT4ge1xuICAgICAgICBjb25zdCBzdWdnZXN0aW9uc0ZldGNoZWQgPSByZXN1bHQuc3VnZ2VzdGlvbnNGZXRjaGVkO1xuICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG4gICAgICAgIGlmIChzdWdnZXN0aW9uc0ZldGNoZWQgIT09IHRvZGF5KSB7XG4gICAgICAgICAgY29uc3QgdXJsID0gQ29uZmlnLmdldFN1Z2dlc3Rpb25zVVJMKCk7XG4gICAgICAgICAgZmV0Y2godXJsKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHBhcnNlZFZhbHVlID0gSlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgICAgICAgQ29uZmlnLnBhcnNlU3VnZXN0aW9ucyhyZXMuZGF0YS50b3BVcmxzKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoe1xuICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25zTGlzdDogcGFyc2VkVmFsdWUsXG4gICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnNGZXRjaGVkOiB0b2RheSxcbiAgICAgICAgICAgICAgICBpc1RvcFVSTE1vZGFsU2VlbjogcmVzLmRhdGEucWxlX3RvcF91cmxzX21vZGFsX3NlZW4sXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBpZiAoIXJlcy5kYXRhLnRvcFVybHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY2hyb21lLmFjdGlvbi5zZXRCYWRnZVRleHQoeyB0ZXh0OiBcIlwiIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG5cbiAgdXBkYXRlRXh0ZW5zaW9uOiAocXVpY2tMYXVuY2hlcykgPT4ge1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbXCJkaXNwbGF5TmFtZXNKU09OXCJdLCAocmVzdWx0KSA9PiB7XG4gICAgICBpZiAocmVzdWx0LmRpc3BsYXlOYW1lc0pTT04gJiYgcXVpY2tMYXVuY2hlcykge1xuICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICAgICAgdHlwZTogXCJTRVRfUUxcIixcbiAgICAgICAgICBkYXRhOiBxdWlja0xhdW5jaGVzLFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoRGlzcGxheU5hbWVzLmlzTWlzc2luZygpKSB7XG4gICAgICAgICAgRGlzcGxheU5hbWVzLmZldGNoRGlzcGxheU5hbWVzKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICAgICAgICAgIHR5cGU6IFwiU0VUX1FMXCIsXG4gICAgICAgICAgICAgIGRhdGE6IHF1aWNrTGF1bmNoZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgICAgICAgdHlwZTogXCJTQVZFX1FMX0NBQ0hFXCIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgICAgICAgdHlwZTogXCJVUERBVEVcIixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgICAgIHR5cGU6IFwiU0FWRV9RTF9DQUNIRVwiLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgICAgIHR5cGU6IFwiVVBEQVRFXCIsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBzaG91bGRTZW5kRXhwQXBpOiAoKSA9PiB7XG4gICAgY29uc3QgdGltZVN0YW1wRnJvbVN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImV4cEFwaUNhbGxUaW1lc3RhbXBcIik7XG4gICAgaWYgKCF0aW1lU3RhbXBGcm9tU3RvcmFnZSkgcmV0dXJuIHRydWU7XG4gICAgY29uc3QgYXBpQ2FsbFRpbWUgPSBwYXJzZUludCh0aW1lU3RhbXBGcm9tU3RvcmFnZSwgMTApO1xuICAgIGNvbnN0IGN1cnJUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgY29uc3QgZGlmZkluTWludXRlcyA9IE1hdGguYWJzKFxuICAgICAgTWF0aC5yb3VuZCgoY3VyclRpbWUgLSBhcGlDYWxsVGltZSkgLyAxMDAwIC8gNjApXG4gICAgKTtcblxuICAgIC8vIHNlbmQgQVBJIGNhbGwgb25seSBhZnRlciA2MG1pbnMgaGF2ZSBwYXNzZWQgc2luY2UgbGFzdCBjYWxsXG4gICAgcmV0dXJuIGRpZmZJbk1pbnV0ZXMgPiA2MDtcbiAgfSxcblxuICBzaG91bGRTZW5kRXZlbnRBcGk6ICgpID0+IHtcbiAgICBjb25zdCB0aW1lU3RhbXBGcm9tU3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZXZlbnRzQXBpQ2FsbFRpbWVzdGFtcFwiKTtcbiAgICBjb25zdCBhcGlDYWxsQ291bnRGcm9tU3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZXZlbnRzQXBpQ2FsbENvdW50XCIpO1xuXG4gICAgaWYgKCF0aW1lU3RhbXBGcm9tU3RvcmFnZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGFwaUNhbGxUaW1lID0gcGFyc2VJbnQodGltZVN0YW1wRnJvbVN0b3JhZ2UsIDEwKTtcbiAgICAgIGNvbnN0IGFwaUNhbGxDb3VudCA9IHBhcnNlSW50KGFwaUNhbGxDb3VudEZyb21TdG9yYWdlLCAxMCk7XG4gICAgICBjb25zdCBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgY29uc3QgZGlmZkluTWludXRlcyA9IE1hdGguYWJzKFxuICAgICAgICBNYXRoLnJvdW5kKChjdXJyVGltZSAtIGFwaUNhbGxUaW1lKSAvIDEwMDAgLyA2MClcbiAgICAgICk7XG5cbiAgICAgIC8vIHNlbmQgQVBJIGNhbGwgb25seSBtYXggNSB0aW1lcyBpbiAxaHJcblxuICAgICAgaWYgKGFwaUNhbGxDb3VudCA+PSA1KSB7XG4gICAgICAgIGlmIChkaWZmSW5NaW51dGVzIDwgNjApIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJldmVudHNBcGlDYWxsQ291bnRcIik7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICB1cGRhdGVTdG9yYWdlRm9yRXZlbnRzQXBpRGF0YTogKCkgPT4ge1xuICAgIGNvbnN0IHRpbWVTdGFtcCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGNvbnN0IGNvdW50ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJldmVudHNBcGlDYWxsQ291bnRcIik7XG4gICAgY29uc3QgbmV3Q291bnQgPSBjb3VudCA/IHBhcnNlSW50KGNvdW50LCAxMCkgKyAxIDogMTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImV2ZW50c0FwaUNhbGxUaW1lc3RhbXBcIiwgdGltZVN0YW1wKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImV2ZW50c0FwaUNhbGxDb3VudFwiLCBuZXdDb3VudCk7XG4gIH0sXG5cbiAgZmV0Y2hRTEVSZW9yZGVyaW5nRXhwZXJpbWVudDogKCkgPT4ge1xuICAgIGNvbnN0IEJBU0VfVVJMID1cbiAgICAgIENvbmZpZy5zZXJ2ZXIuc3ViRG9tYWluID09PSBcImxvY2FsXCJcbiAgICAgICAgPyBDb25maWcuc2VydmVyLmFkZHJlc3NGb3JMaXZlUHJlZml4XG4gICAgICAgIDogQ29uZmlnLnNlcnZlci5hZGRyZXNzO1xuICAgIGNvbnN0IGN1cnJUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgaWYgKENvbmZpZy5zaG91bGRTZW5kRXhwQXBpKCkpIHtcbiAgICAgIGZldGNoKGAke0JBU0VfVVJMfS9nZXRfcXVpY2tfbGF1bmNoX3Jlb3JkZXJpbmdfZXhwZXJpbWVudF92YWx1ZWApXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZXhwQXBpQ2FsbFRpbWVzdGFtcFwiLCBjdXJyVGltZSk7XG4gICAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHtcbiAgICAgICAgICAgIGlzUXVpY2tMYXVuY2hlT3JkZXJpbmdFeHBFbmFibGVkOiBkYXRhLnZhbHVlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJleHBBcGlDYWxsVGltZXN0YW1wXCIsIGN1cnJUaW1lKTtcbiAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoe1xuICAgICAgICAgICAgaXNRdWlja0xhdW5jaGVPcmRlcmluZ0V4cEVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIGFkZEV2ZW50c1RvU3RvcmFnZTogKHBheWxvYWQsIGNhbGxiYWNrKSA9PiB7XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFtcImV2ZW50c1wiXSwgKHJlc3VsdCkgPT4ge1xuICAgICAgbGV0IHN0b3JlZEV2ZW50cyA9IHJlc3VsdFtcImV2ZW50c1wiXTtcbiAgICAgIHBheWxvYWQuZGF0YS5lZHNfdGltZXN0YW1wID0gbmV3IERhdGUoKS50b1VUQ1N0cmluZygpO1xuICAgICAgc3RvcmVkRXZlbnRzID0gc3RvcmVkRXZlbnRzXG4gICAgICAgID8gc3RvcmVkRXZlbnRzXG4gICAgICAgIDoge1xuICAgICAgICAgICAgZGF0YTogW10sXG4gICAgICAgICAgfTtcbiAgICAgIHN0b3JlZEV2ZW50cy5kYXRhLnB1c2gocGF5bG9hZCk7XG5cbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7XG4gICAgICAgIFtcImV2ZW50c1wiXTogc3RvcmVkRXZlbnRzLFxuICAgICAgfSk7XG5cbiAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XG4gICAgfSk7XG4gIH0sXG5cbiAgaW5pdDogKCkgPT4ge1xuICAgIHJldHVybiBmZXRjaChcIi4uL2NvbmZpZy5qc29uXCIpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihDb25maWcsIHJlcyk7XG4gICAgICB9KTtcbiAgfSxcbn07XG5cbi8vPXJlcXVpcmUgY29uZmlnLmpzXG5cbmNvbnN0IERpc3BsYXlOYW1lcyA9IChmdW5jdGlvbiAoKSB7XG4gIGxldCBkaXNwbGF5TmFtZXM7XG4gIGxldCBpc01pc3NpbmcgPSBmYWxzZTtcblxuICBjb25zdCBmZXRjaERpc3BsYXlOYW1lcyA9ICgpID0+IHtcbiAgICBjb25zdCB1cmwgPSBDb25maWcuZ2V0RGlzcGxheU5hbWVzVVJMKCk7XG4gICAgZmV0Y2godXJsKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBkaXNwbGF5TmFtZXMgPSBkYXRhO1xuICAgICAgICBzYXZlRGlzcGxheU5hbWVzQ2FjaGUoKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGxvYWREaXNwbGF5TmFtZXNDYWNoZSA9ICgpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbXCJkaXNwbGF5TmFtZXNKU09OXCJdLCAocmVzdWx0KSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFZhbHVlID0gcmVzdWx0LmRpc3BsYXlOYW1lc0pTT047XG4gICAgICAgIGRpc3BsYXlOYW1lcyA9IHBhcnNlZFZhbHVlO1xuICAgICAgICByZXNvbHZlKHBhcnNlZFZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHNhdmVEaXNwbGF5TmFtZXNDYWNoZSA9ICgpID0+IHtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoe1xuICAgICAgZGlzcGxheU5hbWVzSlNPTjogZGlzcGxheU5hbWVzLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGdldERpc3BsYXlOYW1lID0gKG9zKSA9PiB7XG4gICAgbGV0IGRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWVzW29zXTtcbiAgICBpZiAoIWRpc3BsYXlOYW1lKSB7XG4gICAgICBkaXNwbGF5TmFtZSA9IFwiVW5rbm93blwiO1xuICAgICAgaXNNaXNzaW5nID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGRpc3BsYXlOYW1lO1xuICB9O1xuXG4gIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoW1wiZGlzcGxheU5hbWVzSlNPTlwiXSwgKHJlc3VsdCkgPT4ge1xuICAgICAgICBjb25zdCBwYXJzZWRWYWx1ZSA9IHJlc3VsdC5kaXNwbGF5TmFtZXNKU09OO1xuICAgICAgICBkaXNwbGF5TmFtZXMgPSBwYXJzZWRWYWx1ZTtcbiAgICAgICAgaWYgKHBhcnNlZFZhbHVlKSB7XG4gICAgICAgICAgcmVzb2x2ZShsb2FkRGlzcGxheU5hbWVzQ2FjaGUoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZShmZXRjaERpc3BsYXlOYW1lcygpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBmZXRjaERpc3BsYXlOYW1lczogZmV0Y2hEaXNwbGF5TmFtZXMsXG4gICAgbG9hZERpc3BsYXlOYW1lc0NhY2hlOiBsb2FkRGlzcGxheU5hbWVzQ2FjaGUsXG4gICAgc2F2ZURpc3BsYXlOYW1lc0NhY2hlOiBzYXZlRGlzcGxheU5hbWVzQ2FjaGUsXG4gICAgZ2V0RGlzcGxheU5hbWU6IGdldERpc3BsYXlOYW1lLFxuICAgIGlzTWlzc2luZzogKCkgPT4ge1xuICAgICAgcmV0dXJuIGlzTWlzc2luZztcbiAgICB9LFxuICAgIGluaXQ6IGluaXQsXG4gIH07XG59KSgpO1xuXG4vLz1yZXF1aXJlIGNvbmZpZy5qc1xuXG5jb25zdCBTZXNzaW9uID0gKCgpID0+IHtcbiAgbGV0IHNlc3Npb25JRDtcbiAgbGV0IGxvZ2luSUQ7XG5cbiAgY29uc3QgZ2V0UXVpY2tMYXVuY2hVUkwgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIENvbmZpZy5zZXJ2ZXIuYWRkcmVzcyArXG4gICAgICBcIi9leHRlbnNpb24tcG9wdXBcIiArXG4gICAgICAobG9naW5JRCAmJiBzZXNzaW9uSUQgPyBgLyR7c2Vzc2lvbklEfS5qc29uYCA6IGAuanNvbmApXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBnZXRTZXNzaW9uSUQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBjaHJvbWUuY29va2llcy5nZXQoXG4gICAgICAgIHtcbiAgICAgICAgICB1cmw6IGdldFF1aWNrTGF1bmNoVVJMKCksXG4gICAgICAgICAgbmFtZTogYCR7Q29uZmlnLnNlcnZlci5jb29raWVQcmVmaXh9X3Nlc3Npb25gLFxuICAgICAgICB9LFxuICAgICAgICAoY29va2llKSA9PiB7XG4gICAgICAgICAgc2Vzc2lvbklEID0gY29va2llID8gY29va2llLnZhbHVlIDogXCJcIjtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0TG9naW5JRCA9ICgpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNocm9tZS5jb29raWVzLmdldChcbiAgICAgICAge1xuICAgICAgICAgIHVybDogZ2V0UXVpY2tMYXVuY2hVUkwoKSxcbiAgICAgICAgICBuYW1lOlxuICAgICAgICAgICAgQ29uZmlnLnNlcnZlci5jb29raWVQcmVmaXggK1xuICAgICAgICAgICAgKENvbmZpZy5zZXJ2ZXIuY29va2llUHJlZml4ID8gXCJfX19cIiA6IFwiXCIpICtcbiAgICAgICAgICAgIFwiYnNfbG9nZ2luZ19pZFwiLFxuICAgICAgICB9LFxuICAgICAgICAoY29va2llKSA9PiB7XG4gICAgICAgICAgbG9naW5JRCA9IGNvb2tpZSA/IGNvb2tpZS52YWx1ZSA6IFwiXCI7XG4gICAgICAgICAgcmVzb2x2ZShsb2dpbklEKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBpc1VzZXJMb2dnZWRJbiA9ICgpID0+IHtcbiAgICByZXR1cm4gQm9vbGVhbihzZXNzaW9uSUQpO1xuICB9O1xuXG4gIC8vIFVzZXMgY29va2llIHdoaWNoIGdldHMgcmVtb3ZlZCBvbiBsb2dvdXQgaW1tZWRpYXRlbHkgYW5kIHBvcHVsYXRlZCBiYWNrIG9uIGxvZ2luXG4gIGNvbnN0IGlzVXNlckFjdHVhbGx5TG9nZ2VkSW4gPSAoKSA9PiB7XG4gICAgU2Vzc2lvbi5nZXRMb2dpbklEKCk7XG4gICAgcmV0dXJuIEJvb2xlYW4obG9naW5JRCk7XG4gIH07XG4gIGNvbnN0IGNsZWFyID0gKCkgPT4ge1xuICAgIHJldHVybiBjaHJvbWUuY29va2llcy5yZW1vdmUoe1xuICAgICAgdXJsOiBnZXRRdWlja0xhdW5jaFVSTCgpLFxuICAgICAgbmFtZTogYCR7Q29uZmlnLnNlcnZlci5jb29raWVQcmVmaXh9X3Nlc3Npb25gLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGdldFNlc3Npb25JRCgpLnRoZW4oZ2V0TG9naW5JRCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRRdWlja0xhdW5jaFVSTDogZ2V0UXVpY2tMYXVuY2hVUkwsXG4gICAgZ2V0TG9naW5JRDogZ2V0TG9naW5JRCxcbiAgICBpc1VzZXJBY3R1YWxseUxvZ2dlZEluOiBpc1VzZXJBY3R1YWxseUxvZ2dlZEluLFxuICAgIGlzVXNlckxvZ2dlZEluOiBpc1VzZXJMb2dnZWRJbixcbiAgICBnZXRTZXNzaW9uSUQ6IGdldFNlc3Npb25JRCxcbiAgICBjbGVhcjogY2xlYXIsXG4gICAgaW5pdDogaW5pdCxcbiAgfTtcbn0pKCk7XG5cbi8vPXJlcXVpcmUgY29uZmlnLmpzXG4vLz1yZXF1aXJlIG1vZGVscy9EaXNwbGF5TmFtZXMuanNcblxudmFyIFF1aWNrTGF1bmNoID0ge1xuICBxdWlja0xhdW5jaERlZmF1bHRzOiB7XG4gICAgaWQ6IDAsXG4gICAgbmFtZTogXCJcIixcbiAgICB2ZXJzaW9uOiBcIlwiLFxuICAgIHZlcnNpb25OYW1lOiBcIlwiLFxuICAgIG9wdGlvbnM6IHt9LFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBkaXNhYmxlZF9tZXNzYWdlOiBcIlwiLFxuICB9LFxuXG4gIHF1aWNrTGF1bmNoOiBmdW5jdGlvbiAocXVpY2tMYXVuY2gpIHtcbiAgICB0aGlzLmlkID0gcXVpY2tMYXVuY2guaWQ7XG4gICAgdGhpcy5uYW1lID0gcXVpY2tMYXVuY2gubmFtZTtcbiAgICB0aGlzLnZlcnNpb24gPSBxdWlja0xhdW5jaC52ZXJzaW9uO1xuICAgIHRoaXMudmVyc2lvbk5hbWUgPSBxdWlja0xhdW5jaC52ZXJzaW9uTmFtZTtcbiAgICB0aGlzLm9wdGlvbnMgPSBxdWlja0xhdW5jaC5vcHRpb25zO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBxdWlja0xhdW5jaC5kaXNhYmxlZDtcbiAgICB0aGlzLmRpc2FibGVkX21lc3NhZ2UgPSBxdWlja0xhdW5jaC5kaXNhYmxlZF9tZXNzYWdlO1xuICB9LFxuXG4gIGluaXQ6IGZ1bmN0aW9uIChxdWlja0xhdW5jaCkge1xuICAgIHJldHVybiBRdWlja0xhdW5jaC5xdWlja0xhdW5jaChcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIFF1aWNrTGF1bmNoLnF1aWNrTGF1bmNoRGVmYXVsdHMsIHF1aWNrTGF1bmNoKVxuICAgICk7XG4gIH0sXG5cbiAgcGFyc2U6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgdmFyIHF1aWNrTGF1bmNoID0gT2JqZWN0LmFzc2lnbih7fSwgUXVpY2tMYXVuY2gucXVpY2tMYXVuY2hEZWZhdWx0cywge1xuICAgICAgaWQ6IGRhdGEuaWQsXG4gICAgICB2ZXJzaW9uTmFtZTogZGF0YS52ZXJzaW9uX25hbWUgfHwgXCJcIixcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgYnJvd3NlcjogZGF0YS5icm93c2VyLFxuICAgICAgICBicm93c2VyX3ZlcnNpb246IGRhdGEuYnJvd3Nlcl92ZXJzaW9uIHx8IDAsXG4gICAgICAgIG9zOiBkYXRhLm9zLFxuICAgICAgICBvc192ZXJzaW9uOiBkYXRhLm9zX3ZlcnNpb24gfHwgMCxcbiAgICAgIH0sXG4gICAgICBkaXNhYmxlZDogZGF0YS5kaXNhYmxlZCB8fCBmYWxzZSxcbiAgICAgIGRpc2FibGVkX21lc3NhZ2U6IGRhdGEuZGlzYWJsZWRfbWVzc2FnZSB8fCBcIlwiLFxuICAgIH0pO1xuICAgIGxldCBkaXNwbGF5TmFtZSA9IERpc3BsYXlOYW1lcy5nZXREaXNwbGF5TmFtZShkYXRhLm9zKTtcbiAgICBpZiAoW1wibW9iaWxlXCIsIFwidGFibGV0XCJdLmluZGV4T2YoZGF0YS5icm93c2VyKSA+IC0xKSB7XG4gICAgICBsZXQgZGV2aWNlID0gZGF0YS5kZXZpY2Uuc3BsaXQoXCItXCIpO1xuICAgICAgcXVpY2tMYXVuY2gub3B0aW9ucy5kZXZpY2UgPSBkZXZpY2VbMF07XG4gICAgICBxdWlja0xhdW5jaC5vcHRpb25zLm9zID0gZGlzcGxheU5hbWU7XG4gICAgICBxdWlja0xhdW5jaC5vcHRpb25zLm9zX3ZlcnNpb24gPSBxdWlja0xhdW5jaC5vcHRpb25zLmJyb3dzZXJfdmVyc2lvbiA9XG4gICAgICAgIGRldmljZVsxXTtcbiAgICAgIGlmIChbXCJpT1NcIiwgXCJXaW5kb3dzIFBob25lXCJdLmluZGV4T2YocXVpY2tMYXVuY2gub3B0aW9ucy5vcykgPT09IC0xKSB7XG4gICAgICAgIGxldCBuYW1lU3BsaXQgPSBxdWlja0xhdW5jaC5vcHRpb25zLmRldmljZS5zcGxpdChcIiBcIik7XG4gICAgICAgIHF1aWNrTGF1bmNoLm5hbWUgPSAoXG4gICAgICAgICAgbmFtZVNwbGl0Lmxlbmd0aCA+IDIgPyBuYW1lU3BsaXQuc2xpY2UoMSkgOiBuYW1lU3BsaXRcbiAgICAgICAgKS5qb2luKFwiIFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHF1aWNrTGF1bmNoLm5hbWUgPSBxdWlja0xhdW5jaC5vcHRpb25zLmRldmljZTtcbiAgICAgICAgaWYgKHF1aWNrTGF1bmNoLm9wdGlvbnMub3MgPT09IFwiV2luZG93cyBQaG9uZVwiKSB7XG4gICAgICAgICAgcXVpY2tMYXVuY2gub3B0aW9ucy5vcyA9IFwiV2lucGhvbmVcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZGlzcGxheU5hbWUgIT09IFwiVW5rbm93blwiKSB7XG4gICAgICAgIHF1aWNrTGF1bmNoLm5hbWUgPSBkaXNwbGF5TmFtZTtcbiAgICAgICAgY29uc3Qgb3NJbmZvID0gcXVpY2tMYXVuY2gubmFtZS5tYXRjaCgvKE9TIFh8bWFjT1N8V2luZG93cykgKC4qKS8pO1xuICAgICAgICBxdWlja0xhdW5jaC5vcHRpb25zLm9zID0gb3NJbmZvWzFdO1xuICAgICAgICBpZiAocXVpY2tMYXVuY2gub3B0aW9ucy5vcyA9PT0gXCJtYWNPU1wiKSB7XG4gICAgICAgICAgcXVpY2tMYXVuY2gub3B0aW9ucy5vcyA9IFwiT1MgWFwiO1xuICAgICAgICB9XG4gICAgICAgIHF1aWNrTGF1bmNoLm9wdGlvbnMub3NfdmVyc2lvbiA9IG9zSW5mb1syXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcXVpY2tMYXVuY2gudmVyc2lvbiA9IE51bWJlcihxdWlja0xhdW5jaC5vcHRpb25zLmJyb3dzZXJfdmVyc2lvbik7XG4gICAgaWYgKGlzTmFOKHF1aWNrTGF1bmNoLnZlcnNpb24pKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHF1aWNrTGF1bmNoLm9wdGlvbnMuYnJvd3Nlcl92ZXJzaW9uLnRvTG93ZXJDYXNlKCkgPT09IFwiaW5zaWRlciBwcmV2aWV3XCJcbiAgICAgICkge1xuICAgICAgICBxdWlja0xhdW5jaC52ZXJzaW9uID0gXCJJUFwiO1xuICAgICAgfSBlbHNlIGlmIChxdWlja0xhdW5jaC52ZXJzaW9uTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcInRlY2hwcmV2aWV3XCIpIHtcbiAgICAgICAgcXVpY2tMYXVuY2gudmVyc2lvbiA9IFwiVFBcIjtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHF1aWNrTGF1bmNoLm9wdGlvbnMuYnJvd3Nlcl92ZXJzaW9uLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcIm1ldHJvXCIpID4gLTFcbiAgICAgICkge1xuICAgICAgICBxdWlja0xhdW5jaC52ZXJzaW9uID0gTnVtYmVyKFxuICAgICAgICAgIHF1aWNrTGF1bmNoLm9wdGlvbnMuYnJvd3Nlcl92ZXJzaW9uLnNwbGl0KFwiIFwiKVswXVxuICAgICAgICApO1xuICAgICAgICBxdWlja0xhdW5jaC52ZXJzaW9uTmFtZSA9IFwibWV0cm9cIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHF1aWNrTGF1bmNoLnZlcnNpb24gPSBxdWlja0xhdW5jaC5vcHRpb25zLmJyb3dzZXJfdmVyc2lvbjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKFxuICAgICAgW1wiYmV0YVwiLCBcImRldlwiLCBcInRlY2hwcmV2aWV3XCJdLmluZGV4T2YoXG4gICAgICAgIHF1aWNrTGF1bmNoLnZlcnNpb25OYW1lLnRvTG93ZXJDYXNlKClcbiAgICAgICkgPiAtMVxuICAgICkge1xuICAgICAgcXVpY2tMYXVuY2gub3B0aW9ucy5icm93c2VyX3ZlcnNpb24gKz0gXCIgXCIgKyBxdWlja0xhdW5jaC52ZXJzaW9uTmFtZTtcbiAgICAgIGlmIChxdWlja0xhdW5jaC52ZXJzaW9uTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcInRlY2hwcmV2aWV3XCIpIHtcbiAgICAgICAgcXVpY2tMYXVuY2gudmVyc2lvbk5hbWUgPSBcIlwiO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcXVpY2tMYXVuY2g7XG4gIH0sXG59O1xuXG5cbkNvbmZpZy5pbml0KClcbiAgLnRoZW4oKCkgPT4gRGlzcGxheU5hbWVzLmluaXQoKSlcbiAgLnRoZW4oKCkgPT4gU2Vzc2lvbi5pbml0KCkpXG4gIC50aGVuKCgpID0+IHtcbiAgICAvLyBtZXNzYWdlcyBjb21pbmcgZnJvbSBsaXZlIGRhc2hib2FyZC5cbiAgICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2VFeHRlcm5hbC5hZGRMaXN0ZW5lcihcbiAgICAgIChyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgICAgICBzd2l0Y2ggKHJlcXVlc3QudHlwZSkge1xuICAgICAgICAgIGNhc2UgXCJVUERBVEVcIjpcbiAgICAgICAgICAgIENvbmZpZy51cGRhdGVFeHRlbnNpb24ocmVxdWVzdC5xdWlja0xhdW5jaGVzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJTSUdOX09VVFwiOlxuICAgICAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICB0eXBlOiBcIkRFTEVURV9RTF9DQUNIRVwiLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBTZXNzaW9uLmNsZWFyKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiaW5zdGFsbFN0YXR1c1wiOlxuICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHtcbiAgICAgICAgICAgICAgaW5zdGFsbGVkOiB0cnVlLFxuICAgICAgICAgICAgICB2ZXJzaW9uOiBjaHJvbWUucnVudGltZS5nZXRNYW5pZmVzdCgpLnZlcnNpb24sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH0pXG4gIC50aGVuKCgpID0+IHtcbiAgICAvKipcbiAgICAgKiB3ZSBmZXRjaCB0aGUgc3VnZ2VzdGlvbnMgYW5kIHNlbmQgc29tZSBkYXRhIHRvIHJhaWxzYXBwXG4gICAgICovXG4gICAgQ29uZmlnLmZldGNoU3VnZ2VzdGlvbnMoKTtcbiAgICBDb25maWcuY2hlY2tCYWRnZURhdGEoKTtcblxuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIENvbmZpZy5mZXRjaFN1Z2dlc3Rpb25zKCk7XG4gICAgICBDb25maWcuY2hlY2tCYWRnZURhdGEoKTtcbiAgICB9LCAxMDAwICogNjAgKiA2MCAqIDYpOyAvL0NoZWNrIGluIDYgaHJzIGlmIGl0J3MgbmV3IGRheSBhbmQgZmV0Y2ggc3VnZ2VzdGlvbnNcblxuICAgIC8vIEFjdGlvbnMgb24gdGFiIGNoYW5nZVxuICAgIGNocm9tZS50YWJzLm9uQWN0aXZhdGVkLmFkZExpc3RlbmVyKCgpID0+IHtcbiAgICAgIENvbmZpZy50cmlnZ2VyU3VnZ2VzdGlvbnMoKTtcbiAgICB9KTtcblxuICAgIGNocm9tZS50YWJzLm9uVXBkYXRlZC5hZGRMaXN0ZW5lcigodGFiSWQsIGNoYW5nZUluZm8sIHRhYikgPT4ge1xuICAgICAgaWYgKGNoYW5nZUluZm8uc3RhdHVzID09IFwiY29tcGxldGVcIiAmJiB0YWIuc3RhdHVzID09IFwiY29tcGxldGVcIikge1xuICAgICAgICBDb25maWcudHJpZ2dlclN1Z2dlc3Rpb25zKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FB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
