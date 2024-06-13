console.log('inject_main.js');
window.clickupExtensionEnabled = true;
window.document.body.classList.add('clickup-chrome-ext_installed');
if (window.clickUpNotepadChromeExtension) {
  window.clickUpNotepadChromeExtension.fullRemove();
}
window.document.body.classList.add('clickup-chrome-ext_installed');

window.clickUpNotepadChromeExtension = new function () {
  var floatingButtonShadow;
  var that = this;
  var TIMESTAMP_ID = (new Date()).getTime();
  var BOX_ID = 'clickup-floating-chrome-extension-frame-box';
  var CLASS_NAME = 'clickup-floating-chrome-extension-frame-box-' + TIMESTAMP_ID;
  var timer = 0;
  var data;
  var isFloatingBtnEnabled = true;
  var port;
  var divIfr;
  var ifr;
  this.getDataFromStorage = function () {
    return new Promise(function (resolve, reject) {
      chrome.storage.sync.get(
        [
          'cuNotepadDomainsList',
          'cuNotepadDomainsPlacement',
          'isFloatingButtonsEnabled',
          'isEditScreenshotDefaultEnabled',
          'isNotepadEnabled',
          'isTimeEnabled',
          'bottom',
          'right',
          'left',
          'top'],
        function (data) {
          var domains = ['app.clickup.com', 'staging.clickup.com'];
          if (data.hasOwnProperty('cuNotepadDomainsList') && data['cuNotepadDomainsList'] &&
            data['cuNotepadDomainsList'].length) {
            domains = domains.concat(data['cuNotepadDomainsList']);
          }
          data['cuNotepadDomainsList'] = domains;
          resolve(data);
        });
    });
  };
  this.create = function (ddd, btn) {
    if (window.document.getElementById(BOX_ID)) {
      return;
    }
    var extensionOrigin = 'chrome-extension://' + chrome.runtime.id;
    if (!location.ancestorOrigins.contains(extensionOrigin)) {
      var div = window.document.createElement('div');
      div.id = BOX_ID;
      var bottom = that.data.bottom;
      var right = that.data.right;
      var left = that.data.left;
      if (that.data.hasOwnProperty('cuNotepadDomainsPlacement') && that.data['cuNotepadDomainsPlacement']) {
        if (that.data['cuNotepadDomainsPlacement'] === 'left') {
          div.className = 'clickup-floating-chrome-extension-frame-box-left';
          if (bottom) {
            div.style.bottom = bottom + 'px';
          }
          if (left) {
            div.style.left = left + 'px';
          }
        } else if (that.data['cuNotepadDomainsPlacement'] === 'middle') {
          div.className = 'clickup-floating-chrome-extension-frame-box-middle';
          if (bottom) {
            div.style.bottom = bottom + 'px';
          }
          if (right) {
            div.style.right = right + 'px';
          }
        } else {
          if (bottom) {
            div.style.bottom = bottom + 'px';
          }
          if (right) {
            div.style.right = right + 'px';
          }
        }
      }

      div.className += ' mfb-component--br ' + CLASS_NAME;
      div.style.display = 'block';
      div.style.zIndex = '2147483636';
      div.scrolling = 'no';

      div.onmouseover = function (e) {
        if (window.document.querySelector('.clickup-chrome-extension-frame-box-show') ||
          window.document.querySelector('#clickup-chrome-extension-frame-box iframe')) {
          return;
        }
        if (ifr) {
          divIfr.appendChild(ifr);
        }
        setTimeout(function () {
          if (window.document.querySelector('#clickup-chrome-extension-frame-box iframe')) {
            if (window.document.querySelector('#clickup-chrome-extension-frame-box iframe').src === '') {
              setTimeout(function () {
                window.document.querySelector('#clickup-chrome-extension-frame-box iframe').src = chrome.runtime.getURL(
                  'index.html#homepage');
              }, 1);
            }
          } else {
            that.createMainBox('hide');
            if (!window.document.querySelector('#clickup-chrome-extension-frame-box iframe') && ifr) {
              divIfr.appendChild(ifr);
            }
          }
        }, 1000);
      };
      floatingButtonShadow = div.attachShadow({mode: 'closed'});
      var template = window.document.createElement('template');
      template.innerHTML = btn;
      floatingButtonShadow.appendChild(template.content);
      template.remove();
      var $body = window.document.body;
      $body.appendChild(div);

      var container = floatingButtonShadow.getElementById('cu-chrome-notepad-btn');
      var button = floatingButtonShadow.querySelector('.notepad-btn__toggle');

      if (!ddd.hasOwnProperty('isFloatingButtonsEnabled') ||
        (ddd.hasOwnProperty('isFloatingButtonsEnabled') && ddd['isFloatingButtonsEnabled'] === true)) {
        var notepad = floatingButtonShadow.querySelector('.notepad-btn ');
        if (notepad && ddd['cuNotepadDomainsPlacement']) {
          if (ddd['cuNotepadDomainsPlacement'] === 'left') {
            notepad.classList.add('notepad-btn_left');
          } else if (ddd['cuNotepadDomainsPlacement'] === 'middle') {
            notepad.classList.add('notepad-btn_left');
            notepad.classList.add('notepad-btn_middle');
          } else {
            notepad.classList.remove('notepad-btn_left');
            notepad.classList.remove('notepad-btn_middle');
          }
        }
        if (!ddd.hasOwnProperty('isTimeEnabled') ||
          (ddd.hasOwnProperty('isTimeEnabled') && ddd['isTimeEnabled'] === true)) {
          container.querySelector('button.notepad-btn__action_play').addEventListener('click', function () {
            chrome.runtime.sendMessage({'CU-POPUP-CREATE-BOX': 'time'});
            chrome.runtime.sendMessage({
              trackEvent: {
                event: 'open chrome extension',
                properties: {
                  via: 'floating button',
                  feature: 'start timer'
                }
              }
            });
          });
          container.querySelector('button.notepad-btn__action_stop').addEventListener('click', function () {
            chrome.runtime.sendMessage({'timer': 'stop'});
            container.querySelector('.notepad-btn__timer').style.display = 'none';
            container.querySelector('.notepad-btn__action_play').style.display = 'flex';
            chrome.runtime.sendMessage({
              trackEvent: {
                event: 'open chrome extension',
                properties: {
                  via: 'floating button',
                  feature: 'stop timer'
                }
              }
            });
          });
        } else {
          container.querySelector('.notepad-btn__action_play').style.display = 'none';
          container.querySelector('.notepad-btn__timer').style.display = 'none';
        }
        if (!ddd.hasOwnProperty('isNotepadEnabled') ||
          (ddd.hasOwnProperty('isNotepadEnabled') && ddd['isNotepadEnabled'] === true)) {
          button.addEventListener('click', function (e) {
            if (container.classList.contains('notepad-btn_opened')) {
              container.classList.remove('notepad-btn_opened');
              that.removeMain();
              chrome.runtime.sendMessage({
                trackEvent: {
                  event: 'close chrome extension',
                  properties: {
                    via: 'floating button',
                  }
                }
              });
            } else {
              container.classList.add('notepad-btn_opened');
              that.createMainBox('notepad');
              chrome.runtime.sendMessage({
                trackEvent: {
                  event: 'open chrome extension',
                  properties: {
                    via: 'floating button',
                  }
                }
              });
              // chrome.runtime.sendMessage({'CU-POPUP-REMOVE-OTHERS': true});
            }
          });
        } else {
          button.addEventListener('click', function (e) {
            if (container.classList.contains('notepad-btn_opened')) {
              container.classList.remove('notepad-btn_opened');
              that.removeMain();
            }
          });
        }

        container.querySelector('button.notepad-btn__action_bookmark').addEventListener('click', function () {
          container.classList.add('notepad-btn_opened');
          that.createMainBox('bookmark');
          chrome.runtime.sendMessage({
            trackEvent: {
              event: 'open chrome extension',
              properties: {
                via: 'floating button',
                feature: 'bookmark'
              }
            }
          });
          // chrome.runtime.sendMessage({'CU-POPUP-REMOVE-OTHERS': true});
        });

        container.querySelector('button.notepad-btn__action_task').addEventListener('click', function () {
          container.classList.add('notepad-btn_opened');
          that.createMainBox('task');
          chrome.runtime.sendMessage({
            trackEvent: {
              event: 'open chrome extension',
              properties: {
                via: 'floating button',
                feature: 'new task'
              }
            }
          });
          // chrome.runtime.sendMessage({'CU-POPUP-REMOVE-OTHERS': true});
        });
        container.querySelector('.dropdown-content a:nth-child(2)').addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          window.document.getElementById(BOX_ID).remove();
        });
        container.querySelector('.dropdown-content a:nth-child(1)').addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          that.createMainBox('popup/highlight');
          // chrome.runtime.sendMessage({'CU-POPUP-REMOVE-OTHERS': true});
        });
        container.querySelector('.dropdown-content a:nth-child(3)').addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          chrome.storage.sync.get('cuNotepadDomainsList', function (s) {
            var list = [];
            if (s.hasOwnProperty('cuNotepadDomainsList')) {
              list = s.cuNotepadDomainsList;
            }
            list.push(window.document.location.host);
            chrome.storage.sync.set({cuNotepadDomainsList: list}, function () {
              window.document.getElementById(BOX_ID).remove();
            });
          });
        });
        container.querySelector('span.notepad-btn__toggle_hide').addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          var hideBtn = container.querySelector('span.notepad-btn__toggle_hide');
          if (hideBtn) {
            if (hideBtn.classList.contains('notepad-btn__toggle_hide-hover')) {
              hideBtn.classList.remove('notepad-btn__toggle_hide-hover');
            } else {
              hideBtn.classList.add('notepad-btn__toggle_hide-hover');
              var hideBInterval = setInterval(function () {
                if (hideBtn.classList.contains('notepad-btn__toggle_hide-hover')) {
                  if (hideBtn.offsetParent === null) {
                    hideBtn.classList.remove('notepad-btn__toggle_hide-hover');
                    clearInterval(hideBInterval);
                  }
                } else {
                  clearInterval(hideBInterval);
                }
              }, 500);
            }
          }
        });

        function fullCaptureListener() {
          container.style.display = 'none';
          chrome.runtime.sendMessage({
            method: 'popup',
            cmd: 'capture-visual',
            tab: {
              id: '',
              title: ''
            }
          }, function () {
          });
          setTimeout(function () {
            if (!ddd.hasOwnProperty('isEditScreenshotDefaultEnabled') ||
              (ddd.hasOwnProperty('isEditScreenshotDefaultEnabled') && ddd['isEditScreenshotDefaultEnabled'] ===
                true)) {
              that.createMainBox('editor');
              // chrome.runtime.sendMessage({'CU-POPUP-REMOVE-OTHERS': true});
              if (window.document.querySelector('#clickup-chrome-extension-frame-box')) {
                window.document.getElementById('clickup-chrome-extension-frame-box').classList.add('cu-app-full-width');
              }
            } else {
              that.createMainBox('screenshot');
              // chrome.runtime.sendMessage({'CU-POPUP-REMOVE-OTHERS': true});
            }
            container.style.display = 'flex';
            container.classList.add('notepad-btn_opened');
          }, 500);
          // chrome.storage.local.set({LAST_SCREENSHOT_FEATURE: 'full'});
        }

        function areaCaptureListener() {
          chrome.runtime.sendMessage({
            method: 'popup',
            cmd: 'capture-portion',
            tab: {
              id: '',
              title: ''
            }
          }, function () {
            chrome.storage.local.set({url: '/screenshot'});
            container.classList.add('notepad-btn_opened');
          });
          chrome.storage.local.set({LAST_SCREENSHOT_FEATURE: 'area'});
        }

        container.querySelector('button.notepad-btn__action_screenshot').addEventListener('click', function () {
          chrome.storage.local.get('LAST_SCREENSHOT_FEATURE', function (savedData) {
            if (savedData.hasOwnProperty('LAST_SCREENSHOT_FEATURE')) {
              if (savedData['LAST_SCREENSHOT_FEATURE'] === 'full') {
                fullCaptureListener();
              } else {
                areaCaptureListener();
              }
            } else {
              that.createMainBox('screenshot');
              // chrome.runtime.sendMessage({'CU-POPUP-REMOVE-OTHERS': true});
              container.classList.add('notepad-btn_opened');
            }
          });
        });

        container.querySelector('button.notepad-btn__screenshot-menu-btn_full-screen').addEventListener('click', fullCaptureListener);

        container.querySelector('button.notepad-btn__screenshot-menu-btn_capture').addEventListener('click', areaCaptureListener);
      }

      template.remove();
      that.setDraggable();
    } else {
      // console.log('This extension works only on tabs');
    }
  };
  this.remove = function () {
    if (window.document.getElementsByClassName(CLASS_NAME) && window.document.getElementsByClassName(CLASS_NAME)[0]) {
      window.document.getElementsByClassName(CLASS_NAME)[0].remove();
    }
  };
  this.show = function () {
    if (window.document.getElementById(BOX_ID)) {
      window.document.getElementById(BOX_ID).classList.add(`${BOX_ID}-show`);
    }
  };
  this.hide = function () {
    if (window.document.getElementById(BOX_ID)) {
      window.document.getElementById(BOX_ID).style.display = 'none';
    }
  };
  this.createMainBox = function (path) {
    if (path === 'homepage' || path === 'notepad') {
      if (window.document.querySelector('.scratchpad.scratchpad-active') &&
        document.querySelector('.scratchpad-button.scratchpad-button--close')) {
        document.querySelector('.scratchpad-button.scratchpad-button--close').click();
      }
    }
    setTimeout(function () {
      if (path === 'email') {
        that.createMainBox('homepage');
      }
    }, 1);
    if (window.document.getElementById('clickup-chrome-extension-frame-box')) {
      chrome.storage.sync.get(
        [
          'bottom',
          'left',
          'right',
          'cuNotepadDomainsPlacement',
          'isFloatingButtonsEnabled',
          'cuNotepadDomainsList',
          'isEditScreenshotDefaultEnabled'],
        function (d) {
          var domains = ['app.clickup.com', 'staging.clickup.com'];
          if (d.hasOwnProperty('cuNotepadDomainsList') && d['cuNotepadDomainsList'] &&
            d['cuNotepadDomainsList'].length) {
            domains = domains.concat(d['cuNotepadDomainsList']);
          }
          if ((d.hasOwnProperty(['isFloatingButtonsEnabled']) && d['isFloatingButtonsEnabled'] === false) ||
            (domains.includes(window.location.hostname))) {
            window.document.getElementById('clickup-chrome-extension-frame-box').style.top = '5px';
            window.document.getElementById('clickup-chrome-extension-frame-box').style.right = '5px';
            window.document.getElementById('clickup-chrome-extension-frame-box').style.bottom = 'auto';
            window.document.getElementById('clickup-chrome-extension-frame-box').style.left = 'auto';
          } else {
            window.document.getElementById('clickup-chrome-extension-frame-box-close-btn').style.display = 'none';
            if (!d.hasOwnProperty(['cuNotepadDomainsPlacement']) || d['cuNotepadDomainsPlacement'] === 'right') {
              window.document.getElementById('clickup-chrome-extension-frame-box').style.right = (d['right'] || 20) +
                40 +
                'px';
              window.document.getElementById('clickup-chrome-extension-frame-box').style.left = null;
            } else {
              window.document.getElementById('clickup-chrome-extension-frame-box').style.left = (d['left'] || 20) + 40 +
                'px';
              window.document.getElementById('clickup-chrome-extension-frame-box').style.right = null;
            }
            var bottom = (d['bottom'] || 20) + 40;
            if (bottom > window.innerHeight - 500) {
              bottom = window.innerHeight - 500;
            }
            window.document.getElementById('clickup-chrome-extension-frame-box').style.bottom = bottom + 'px';
            window.document.getElementById('clickup-chrome-extension-frame-box').style.top = null;
          }

        });
      if (window.document.getElementById('clickup-chrome-extension-frame-box').classList.contains('clickup-chrome-extension-frame-box-show')) {
        window.document.getElementById('clickup-chrome-extension-frame-box').classList.remove(
          'clickup-chrome-extension-frame-box-show'
        );
        if (floatingButtonShadow && floatingButtonShadow.querySelector('.notepad-btn_opened')) {
          floatingButtonShadow.getElementById('cu-chrome-notepad-btn').classList.remove('notepad-btn_opened');
        }
      } else {
        if (!window.document.querySelector('#clickup-chrome-extension-frame-box iframe')) {
          if (ifr) {
            divIfr.appendChild(ifr);
          }
        }
        setTimeout(function () {
          if (window.document.querySelector('#clickup-chrome-extension-frame-box iframe')) {
            window.document.querySelector('#clickup-chrome-extension-frame-box iframe').src = chrome.runtime.getURL(
              'index.html#' + path);
            window.document.getElementById('clickup-chrome-extension-frame-box').classList.add('clickup-chrome-extension-frame-box-show');
            if (floatingButtonShadow && !floatingButtonShadow.querySelector('.notepad-btn_opened')) {
              floatingButtonShadow.getElementById('cu-chrome-notepad-btn').classList.add('notepad-btn_opened');
            }
          }
        }, 100);
        return;
      }
    }
    var extensionOrigin = 'chrome-extension://' + chrome.runtime.id;
    if (!location.ancestorOrigins.contains(extensionOrigin)) {
      var div = window.document.createElement('div');
      var div1 = window.document.createElement('div');
      var span = window.document.createElement('div');
      var iframe = window.document.createElement('iframe');
      div.id = 'clickup-chrome-extension-frame-box';
      if (that.data && (!that.data.hasOwnProperty('isOpenedFromTop') || !that.data['isOpenedFromTop'])) {
        if (window.document.getElementById(BOX_ID)) {
          var floatBtn = window.document.getElementById(BOX_ID).getBoundingClientRect();
          if (floatBtn.bottom > 550) {
            div.style.top = floatBtn.bottom - 550 + 'px';
          }
          if (window.document.getElementById(BOX_ID).classList.contains('clickup-floating-chrome-extension-frame-box-left')) {
            div.classList.add('clickup-chrome-extension-frame-box-left');
            div.classList.remove('clickup-chrome-extension-frame-box-middle');
          }
          if (window.document.getElementById(BOX_ID).classList.contains('clickup-floating-chrome-extension-frame-box-middle')) {
            div.classList.add('clickup-chrome-extension-frame-box-middle');
            div.classList.remove('clickup-chrome-extension-frame-box-left');
          } else {
            div.classList.remove('clickup-chrome-extension-frame-box-left');
            div.classList.remove('clickup-chrome-extension-frame-box-middle');
          }
        }
      } else {
        chrome.storage.local.remove('isOpenedFromTop');
        if (that.data) {
          that.data['isOpenedFromTop'] = false;
        }
      }
      // Must be declared at web_accessible_resources in manifest.json

      iframe.scrolling = 'no';
      // Some styles for a fancy sidebar
      div1.title = 'Close';
      span.id = 'clickup-chrome-extension-frame-box-close-btn';
      span.onclick = function (ev) {
        window.document.getElementById('clickup-chrome-extension-frame-box').classList.remove('clickup-chrome-extension-frame-box-show');
        chrome.runtime.sendMessage({
          trackEvent: {
            event: 'close chrome extension',
            properties: {
              via: 'floating button',
            }
          }
        });
        // chrome.runtime.sendMessage({'editor': 'remove'});
      };
      span.appendChild(div1);
      div.appendChild(span);
      // div.appendChild(iframe);
      divIfr = div;
      ifr = iframe;
      // divIfr.appendChild(ifr);
      if (!window.document.getElementById(BOX_ID)) {
        div1.outerHTML = '<svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><g stroke-width="2" stroke="#979797" fill="none" fill-rule="evenodd" stroke-linecap="round"><path d="M0,0 L12,12" transform="translate(1 1)"></path><path d="M0,0 L12,12" transform="matrix(-1 0 0 1 13 1)"></path></g></svg>';
      }
      window.document.body.appendChild(div);
    } else {
      alert('This extension works only on tabs');
    }
  };
  this.removeMain = function () {
    if (window.document.getElementById('clickup-chrome-extension-frame-box')) {
      window.document.getElementById('clickup-chrome-extension-frame-box').classList.remove('clickup-chrome-extension-frame-box-show');
      if (window.document.querySelector('#clickup-chrome-extension-frame-box.cu-app-full-width')) {
        window.document.getElementById('clickup-chrome-extension-frame-box').classList.remove('cu-app-full-width');
      }
      if (floatingButtonShadow && floatingButtonShadow.querySelector('.notepad-btn_opened')) {
        floatingButtonShadow.getElementById('cu-chrome-notepad-btn').classList.remove('notepad-btn_opened');
      }
      if (window.document.querySelector('#clickup-chrome-extension-frame-box iframe')) {
        window.document.querySelector('#clickup-chrome-extension-frame-box iframe').src = chrome.runtime.getURL(
          'index.html#refresh');
      }
    }
  };
  this.listener = function (message, sender, responseCb) {
    responseCb({status: 'ok'});
    // console.log('MSG', message);
    if (message.hasOwnProperty('editor')) {
      if (message.editor) {
        if (message.editor === 'open') {
          if (window.document.querySelector('#clickup-chrome-extension-frame-box')) {
            window.document.getElementById('clickup-chrome-extension-frame-box').classList.add('cu-app-full-width');
          }
        } else if (message.editor === 'close') {
          if (window.document.querySelector('#clickup-chrome-extension-frame-box.cu-app-full-width')) {
            window.document.getElementById('clickup-chrome-extension-frame-box').classList.remove('cu-app-full-width');
          }
        } else if (message.editor === 'create') {
          chrome.storage.local.get(['token', 'isOpenedFromTop'], function (d) {
            if (d.hasOwnProperty('token') && d.token) {
              if (d.hasOwnProperty('isOpenedFromTop') && d['isOpenedFromTop'] && that.data) {
                that.data['isOpenedFromTop'] = true;
                chrome.storage.local.remove('isOpenedFromTop');
              }
              that.createMainBox('homepage');
            }
          });
        } else if (message.editor === 'remove') {
          if (window.document.querySelector('.scratchpad.scratchpad-active') &&
            document.querySelector('.scratchpad-button.scratchpad-button--close')) {
            document.querySelector('.scratchpad-button.scratchpad-button--close').click();
          }
          that.removeMain();
        } else if (message.editor === 'email') {
          that.createMainBox('email');
        }
      }
    } else if (message.hasOwnProperty('CU-POPUP-STATE-CHANGE')) {
      if (window.document.getElementById(BOX_ID)) {
        if (message['CU-POPUP-STATE-CHANGE']) {
          window.document.getElementById(BOX_ID).classList.add('cu-app-full-width');
        } else {
          window.document.getElementById(BOX_ID).classList.remove('cu-app-full-width');
        }
      }
    } else if (message.hasOwnProperty('CU-CHANGE-ZOOM')) {
      var newZoom = message['CU-CHANGE-ZOOM'];
      if (newZoom) newZoom = 1 / newZoom;
      if (newZoom) {
        if (window.document.getElementById(BOX_ID)) {
          window.document.getElementById(BOX_ID).style.transform = `scale(${newZoom})`;
          if (window.document.getElementById(BOX_ID).style.bottom) {
            window.document.getElementById(BOX_ID).style.bottom = newZoom *
              parseFloat(window.document.getElementById(BOX_ID).style.bottom) + 'px';
          }
        }
      }
    } else if (message.hasOwnProperty('CU-POPUP-CREATE')) {
      that.create();
    } else if (message.hasOwnProperty('CU-POPUP-SHOW')) {
      that.show();
    } else if (message.hasOwnProperty('CU-POPUP-REMOVE')) {
      that.remove();
    } else if (message.hasOwnProperty('CU-POPUP-PLACEMENT')) {
      if (window.document.getElementById(BOX_ID)) {
        if (message['CU-POPUP-PLACEMENT'] === 'left') {
          window.document.getElementById(BOX_ID).classList.add('clickup-floating-chrome-extension-frame-box-left');
          if (window.document.getElementById('clickup-chrome-extension-frame-box')) {
            window.document.getElementById('clickup-chrome-extension-frame-box').classList.add('clickup-chrome-extension-frame-box-left');
          }
        } else if (message['CU-POPUP-PLACEMENT'] === 'middle') {
          window.document.getElementById(BOX_ID).classList.add('clickup-floating-chrome-extension-frame-box-middle');
          if (document.getElementById('clickup-chrome-extension-frame-box')) {
            window.document.getElementById('clickup-chrome-extension-frame-box').classList.add('clickup-chrome-extension-frame-box-middle');
          }
          window.document.getElementById(BOX_ID).classList.remove('clickup-floating-chrome-extension-frame-box-left');
          if (window.document.getElementById('clickup-chrome-extension-frame-box')) {
            window.document.getElementById('clickup-chrome-extension-frame-box').classList.remove('clickup-chrome-extension-frame-box-left');
          }
        } else {
          window.document.getElementById(BOX_ID).classList.remove('clickup-floating-chrome-extension-frame-box-left');
          if (window.document.getElementById('clickup-chrome-extension-frame-box')) {
            window.document.getElementById('clickup-chrome-extension-frame-box').classList.remove('clickup-chrome-extension-frame-box-left');
          }
          window.document.getElementById(BOX_ID).classList.remove('clickup-floating-chrome-extension-frame-box-middle');
          if (window.document.getElementById('clickup-chrome-extension-frame-box')) {
            window.document.getElementById('clickup-chrome-extension-frame-box').classList.remove('clickup-chrome-extension-frame-box-middle');
          }
        }
      }
    } else if (message.hasOwnProperty('CU-POPUP-FULL-REMOVE')) {
      setTimeout(function () {
        that.fullRemove();
      }, 500);
    } else if (message.hasOwnProperty('CU-POPUP-CREATE-BOX')) {
      setTimeout(function () {
        that.createMainBox(message['CU-POPUP-CREATE-BOX']);
        if (message['CU-POPUP-CREATE-BOX'] === 'editor') {
          if (window.document.querySelector('#clickup-chrome-extension-frame-box')) {
            window.document.getElementById('clickup-chrome-extension-frame-box').classList.add('cu-app-full-width');
          }
        }
      }, 100);
    } else if (message.hasOwnProperty('timer')) {
      if (floatingButtonShadow) {
        var button = floatingButtonShadow.querySelector('.notepad-btn__toggle');
        var playBtn = floatingButtonShadow.querySelector('.notepad-btn__action_play');
        var timerBtn = floatingButtonShadow.querySelector('.notepad-btn__timer');
        var timeBtn = timerBtn.querySelector('.notepad-btn__time');
        var timerStopBtn = floatingButtonShadow.querySelector('.notepad-btn__action_stop');
        var timerBtnCounter = timerBtn.querySelector('.notepad-btn__time');
        if (message.timer === 'start') {
          playBtn.style.display = 'none';
          timerBtn.style.display = 'flex';
          if (message.current > 0) {
            var date = new Date(null);
            date.setSeconds(message.current);
            if (message.current < 3600) {
              timerBtnCounter.innerHTML = date.toISOString().substr(14, 5);
            } else {
              timerBtnCounter.innerHTML = date.toISOString().substr(11, 8);
            }
            if (message && message.task && message.task.status && message.task.id && message.task.name) {
              timeBtn.setAttribute('data-tooltip',
                `[${message.task.status.status}] #${message.task.id} - ${message.task.name}`);
            }
          } else {
            timerBtnCounter.innerHTML = '00:00';
          }
        } else if (message.timer === 'stop') {
          timerBtn.style.display = 'none';
          playBtn.style.display = 'flex';
        }
      }
    } else if (message.hasOwnProperty('timerCs')) {
      if (floatingButtonShadow) {
        var button = floatingButtonShadow.querySelector('.notepad-btn__toggle');
        var playBtn = floatingButtonShadow.querySelector('.notepad-btn__action_play');
        var timerBtn = floatingButtonShadow.querySelector('.notepad-btn__timer');
        var timerStopBtn = floatingButtonShadow.querySelector('.notepad-btn__action_stop');
        var timerBtnCounter = timerBtn.querySelector('.notepad-btn__time');
        if (message.timerCs === 'start') {
          playBtn.style.display = 'none';
          timerBtn.style.display = 'flex';
          if (message.current > 0) {
            var date = new Date(null);
            date.setSeconds(message.current);
            if (message.current < 3600) {
              timerBtnCounter.innerHTML = date.toISOString().substr(14, 5);
            } else {
              timerBtnCounter.innerHTML = date.toISOString().substr(11, 8);
            }
          } else {
            timerBtnCounter.innerHTML = '00:00';
          }
        } else if (message.timerCs === 'stop') {
          timerBtn.style.display = 'none';
          playBtn.style.display = 'flex';
        }
      }
    } else if (message.hasOwnProperty('moveFloatingBtn')) {
      if (floatingButtonShadow) {
        var moveData = message.moveFloatingBtn;
        var fb = window.document.getElementById('clickup-floating-chrome-extension-frame-box');
        var ext = window.document.getElementById('clickup-chrome-extension-frame-box');
        if (moveData.hasOwnProperty('cuNotepadDomainsPlacement') && moveData['cuNotepadDomainsPlacement']) {
          if (moveData['cuNotepadDomainsPlacement'] === 'left') {
            fb.className = 'clickup-floating-chrome-extension-frame-box-left';
            if (moveData.bottom) {
              fb.style.bottom = moveData.bottom + 'px';
            }
            if (moveData.left) {
              fb.style.left = moveData.left + 'px';
              fb.style.right = 'auto';
            }
          } else if (moveData['cuNotepadDomainsPlacement'] === 'middle') {
            fb.className = 'clickup-floating-chrome-extension-frame-box-middle';
            if (moveData.bottom) {
              fb.style.bottom = moveData.bottom + 'px';
            }
            if (moveData.right) {
              fb.style.right = moveData.right + 'px';
              fb.style.left = 'auto';
            }
          } else {
            if (moveData.bottom) {
              fb.style.bottom = moveData.bottom + 'px';
            }
            if (moveData.right) {
              fb.style.right = moveData.right + 'px';
              fb.style.left = 'auto';
            }
          }
        }
        var notepad = floatingButtonShadow.querySelector('.notepad-btn ');
        if (notepad && moveData['cuNotepadDomainsPlacement']) {
          if (moveData['cuNotepadDomainsPlacement'] === 'left') {
            notepad.classList.add('notepad-btn_left');
          } else if (moveData['cuNotepadDomainsPlacement'] === 'middle') {
            notepad.classList.add('notepad-btn_left');
            notepad.classList.add('notepad-btn_middle');
          } else {
            notepad.classList.remove('notepad-btn_left');
            notepad.classList.remove('notepad-btn_middle');
          }
        }
      }
    } /*else if (message.hasOwnProperty('CU-POPUP-PLACEMENT')) {
      var notepad = document.querySelector('.notepad-btn ');
      if (notepad) {
        if (message['CU-POPUP-PLACEMENT'] === 'left') {
          notepad.classList.add('notepad-btn_left');
        } else if (message['CU-POPUP-PLACEMENT'] === 'middle') {
          notepad.classList.add('notepad-btn_middle');
          notepad.classList.add('notepad-btn_left');
        } else {
          notepad.classList.remove('notepad-btn_middle');
          notepad.classList.remove('notepad-btn_left');
        }
      }
    } else if (message.hasOwnProperty('editor')) {
      if (message['editor'] === 'create') {
        container.
          classList.
          add('notepad-btn_opened');
      } else if (message['editor'] === 'remove') {
        container.
          classList.
          remove('notepad-btn_opened');
      }
    }*/

    return true;

  };
  this.fullRemove = function () {
    try {
      that.stopTimer();
      that.remove();
      that.removeMain();
      // chrome.runtime.onMessage.removeListener(that.listener);
      if (window.document.getElementById('clickup-chrome-extension-frame-box')) {
        window.document.getElementById('clickup-chrome-extension-frame-box').remove();
      }
      port.onMessage.removeListener(that.listener);
    } catch (e) {
      // console.log('removed');
    }
  };
  this.startTimer = function () {
    timer = setInterval(function () {
      // // console.log('p', errors++);
      if (floatingButtonShadow) {
        if (window.document.querySelector('.clickup-chrome-extension-frame-box-show')) {
          if (!floatingButtonShadow.querySelector('.notepad-btn_opened')) {
            floatingButtonShadow.getElementById('cu-chrome-notepad-btn').classList.add('notepad-btn_opened');
          }
        } else {
          if (floatingButtonShadow.querySelector('.notepad-btn_opened')) {
            floatingButtonShadow.getElementById('cu-chrome-notepad-btn').classList.remove('notepad-btn_opened');
          }
        }
      }
      if (window.document.querySelector('.scratchpad.scratchpad-active')) {
        that.removeMain();
      }
    }, 1000);
  };
  this.stopTimer = function () {
    if (timer) {
      clearInterval(timer);
    }
  };
  this.setDraggable = function () {
    var draggable, draggable1, container, iframebox, dragData = null;
    var start;
    var end;
    var delta;
    draggable1 = floatingButtonShadow.getElementById('cu-floating-move-btn');
    draggable = floatingButtonShadow.querySelector('#cu-chrome-notepad-btn.notepad-btn_closed .notepad-btn__toggle');
    container = window.document.getElementById('clickup-floating-chrome-extension-frame-box');
    iframebox = window.document.getElementById('clickup-chrome-extension-frame-box');

    //draggable.addEventListener('mousedown', startDrag, false);
    function dragElement(elmnt) {
      var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
      if (document.getElementById(elmnt.id + 'header')) {
        // if present, the header is where you move the DIV from:
        document.getElementById(
          elmnt.id + 'header'
        ).onmousedown = dragMouseDown;
      } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
      }

      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
      }

      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = elmnt.offsetTop - pos2 + 'px';
        elmnt.style.left = elmnt.offsetLeft - pos1 + 'px';
      }

      function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }

    // dragElement(container);

    draggable1.addEventListener('mousedown', startDrag, false);
    //draggable.addEventListener('mouseup', mouseUpDrag, false);
    draggable1.addEventListener('mouseup', mouseUpDrag, false);

    /* draggable1.ondragstart = function () {
       return false;
     };
     draggable.ondragstart = function () {
       return false;
     };*/

    function mouseUpDrag() {
      container.classList.remove('ui-draggable-dragging');
      end = new Date();
      delta = (end - start) / 1000.0;
      if (delta < 1) {
        window.document.removeEventListener('mousemove', drag, false);
        window.document.removeEventListener('mouseup', stopDrag, false);
      }
    }

    function startDrag(ev) {
      start = new Date();
      if (!dragData) {
        containerOffset = 0;
        ev = ev || event;
        dragData = {
          x: ev.clientX - container.offsetLeft - containerOffset,
          y: ev.clientY - container.offsetTop - containerOffset
        };
      }

      window.document.addEventListener('mousemove', drag, false);
      window.document.addEventListener('mouseup', stopDrag, false);
    }

    var newDrag;

    function processDrag(ev) {
      setTimeout(function () {
        if (newDrag === ev.timeStamp) {
          stopDrag(ev);
        }
      }, 2000);
      newDrag = ev.timeStamp;

      if (ev.stopPropagation) ev.stopPropagation();
      if (ev.preventDefault) ev.preventDefault();
      posX = ev.clientX - dragData.x;
      posY = ev.clientY - dragData.y;

      maxX = window.innerWidth;
      maxY = window.innerHeight;
      if (!dragData.moved && Math.abs(container.offsetLeft - posX) < 20 && Math.abs(container.offsetTop - posY) < 20) {
        return;
      }

      dragData.moved = true;
      container.classList.add('ui-draggable-dragging');
      pos = {};
      if (maxX / 2 > posX) {
        pos.left = posX;
        if (pos.left < 10) {
          pos.left = 10;
        }
        container.style.left = pos.left + 'px';
        container.style.right = null;
        floatingButtonShadow.getElementById('cu-chrome-notepad-btn').classList.add('notepad-btn_left');
      } else {
        pos.right = maxX - posX - 50;
        if (pos.right < 10) {
          pos.right = 10;
        }
        container.style.right = pos.right + 'px';
        container.style.left = null;
        floatingButtonShadow.getElementById('cu-chrome-notepad-btn').classList.remove('notepad-btn_left');
      }

      pos.bottom = maxY - posY - 45;
      if (pos.bottom > window.innerHeight - 200) {
        pos.bottom = window.innerHeight - 200;
      }
      if (pos.bottom < 10) {
        pos.bottom = 10;
      }
      container.style.bottom = pos.bottom + 'px';
      container.style.top = null;
      dragData.pos = pos;
    }

    function drag(ev) {
      if (dragData) {
        processDrag(ev || window.event);
      }
    }

    function stopDrag(ev) {
      newDrag = null;
      container.classList.remove('ui-draggable-dragging');
      if (dragData && dragData.moved) {
        dragData.moved = false;
        if (dragData.pos) {
          placement = 'right';
          if (ev.clientX < window.innerWidth / 2) {
            placement = 'left';
          }
          window.document.getElementById('clickup-chrome-extension-frame-box').style.right = dragData.pos.right;
          window.document.getElementById('clickup-chrome-extension-frame-box').style.bottom = dragData.pos.bottom;
          window.document.getElementById('clickup-chrome-extension-frame-box').style.left = dragData.pos.left;
          container.classList.remove('ui-draggable-dragging');
          if (chrome && chrome.storage && chrome.storage.sync) {
            try {
              chrome.storage.sync.set({
                right: dragData.pos.right,
                bottom: dragData.pos.bottom,
                left: dragData.pos.left,
                'cuNotepadDomainsPlacement': placement
              });
              chrome.runtime.sendMessage({
                moveFloatingBtn: {
                  right: dragData.pos.right,
                  bottom: dragData.pos.bottom,
                  left: dragData.pos.left,
                  'cuNotepadDomainsPlacement': placement
                }
              });
            } catch (e) {
            }
          }
        }
        dragData = null;
      }
      // window.document.removeEventListener('mousemove', drag, false);
      // window.document.removeEventListener('mouseup', stopDrag, false);
      document.onmouseup = null;
      document.onmousemove = null;
    }
  };
  this.init = function () {
    this.getDataFromStorage().then(function (settings) {
      if (!settings || settings['cuNotepadDomainsList'] &&
        settings['cuNotepadDomainsList'].includes(window.location.hostname)) {
        return false;
      }
      if (!settings.hasOwnProperty('isFloatingButtonsEnabled') ||
        settings.hasOwnProperty('isFloatingButtonsEnabled') &&
        settings['isFloatingButtonsEnabled'] === true) {
        that.data = settings;
        chrome.storage.local.get('token', function (d) {
          if (d.hasOwnProperty('token') && d.token) {
            chrome.runtime.sendMessage({'CU-POPUP-GET-FLOAT-BTN': true}, function (btn) {
              if (btn) {
                that.create(that.data, btn);
              }
            });
          }
        });
      } else {
        return false;
      }
    });
    chrome.runtime.onMessage.addListener(that.listener);
    port = chrome.runtime.connect({name: 'ClickUp Chrome Extension'});
    port.postMessage({test: 'ping'});
    port.onMessage.addListener((message, sender, ss) => {
      port.postMessage({test: 'ping'});
    });
    port.onDisconnect.addListener(p => {
      that.fullRemove();
    });
    //that.createMainBox('hide');
    /*window.onkeyup = function (event) {
      if (event.key === 'n' && event.altKey && event.ctrlKey) {
        that.createMainBox('notepad');
      }
    };*/
    that.startTimer();
  };
  this.init();
};
