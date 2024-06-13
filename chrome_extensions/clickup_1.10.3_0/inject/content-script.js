console.log('init from content script');

var port;
if (chrome && chrome.runtime) {
  chrome.runtime.connect({name: 'ClickUp Chrome Extension'});
}
var intertmp;
try {
  var intertmp = setInterval(function () {
    if (document.readyState === 'complete' && chrome && chrome.storage && chrome.storage.local) {
      chrome.storage.local.get(['screenshot', 'screenshotTime'], function (storageData) {
        if (chrome.runtime.lastError) {
          return;
        }
        if (storageData['screenshot'] && storageData['screenshotTime'] &&
          (parseInt(storageData['screenshotTime']) > (new Date().getTime() - 3600 * 1000))) {
          if (!document.querySelector('.comment-bar.comment-bar_active .cu-chrome-extension-attach-btn')) {
            var btn = document.createElement('button');
            btn.className = 'cu-chrome-extension-attach-btn';
            btn.onmouseenter = function () {
              if (!document.querySelector('.tooltip')) {
                var tooltip = document.createElement('div');
                tooltip.className = 'tooltip';
                tooltip.textContent = 'Attach screenshot from Chrome extension';
                tooltip.setAttribute('data-cu-tooltip', 'true');
                tooltip.style.top = btn.getBoundingClientRect().top - 45 + 'px';
                tooltip.style.left = btn.getBoundingClientRect().left + 10 + 'px';
                document.body.appendChild(tooltip);
                setTimeout(function () {
                  document.querySelector('.tooltip') && document.querySelector('.tooltip').remove();
                }, 3000);
              }
            };
            btn.onmouseleave = function () {
              document.querySelector('.tooltip') && document.querySelector('.tooltip').remove();
            };

            btn.innerHTML = `
       <?xml version="1.0" encoding="UTF-8"?>
<svg width="27px" height="21px" viewBox="0 0 27 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- Generator: Sketch 51.3 (57544) - http://www.bohemiancoding.com/sketch -->
  <defs>
    <pattern id="img1" width="20" height="20">
      <image xlink:href="${chrome.runtime.getURL('assets/logo-color.png')}" x="0" y="0" width="20" height="20" />
    </pattern>
    <linearGradient x1="49.9407735%" y1="0.144064541%" x2="49.9407735%" y2="100.032014%" id="linearGradient-1">
      <stop stop-color="#81B4E0" offset="0%"></stop>
      <stop stop-color="#0C5A94" offset="100%"></stop>
    </linearGradient>
    <linearGradient x1="49.99966%" y1="0.137308242%" x2="49.99966%" y2="71.6929448%" id="linearGradient-2">
      <stop stop-color="#F06B59" offset="0%"></stop>
      <stop stop-color="#DF2227" offset="100%"></stop>
    </linearGradient>
    <linearGradient x1="18.1686595%" y1="81.9582846%" x2="48.8384561%" y2="38.2815977%" id="linearGradient-3">
      <stop stop-color="#388B41" offset="0%"></stop>
      <stop stop-color="#4CB749" offset="100%"></stop>
    </linearGradient>
    <linearGradient x1="65.064017%" y1="85.3516976%" x2="24.3815699%" y2="12.2076287%" id="linearGradient-4">
      <stop stop-color="#E4B022" offset="0%"></stop>
      <stop stop-color="#FCD209" offset="30%"></stop>
    </linearGradient>
  </defs>
  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <g id="Explanation--4" transform="translate(-371.000000, -533.000000)">
      <g id="clickup-chrome" transform="translate(371.000000, 533.000000)">
        <circle id="Oval" cx="10" cy="10" r="10" fill="url(#img1)"></circle>
        <circle id="Oval" fill="#FFFFFF" fill-rule="nonzero" cx="19" cy="13.5" r="6.5"></circle>
        <path d="M23.5,15 C23.5,12.2385667 21.4852711,10 19.0000422,10 C16.5147289,10 14.5,12.2385667 14.5,15 L15.7856902,15 C15.7856902,13.0275075 17.2247823,11.4285312 18.9999578,11.4285312 C20.7751334,11.4285312 22.2142254,13.0275075 22.2142254,15" id="Shape" fill-opacity="0.1" fill="#000000" fill-rule="nonzero"></path>
        <circle id="Oval" fill-opacity="0.1" fill="#000000" fill-rule="nonzero" cx="19" cy="14.5" r="2.5"></circle>
        <circle id="Oval" fill="url(#linearGradient-1)" fill-rule="nonzero" cx="19" cy="13.5" r="2.5"></circle>
        <path d="M25.5,10.4000081 C23.64556,6.48014094 19.1177205,4.88181976 15.3866491,6.83004946 C14.223279,7.43747337 13.2289521,8.3502838 12.5,9.48004683 L15.5311142,15 C14.9729698,13.1359267 15.9587626,11.1492414 17.733013,10.5627476 C18.0450839,10.4596516 18.3697768,10.4048303 18.6968797,10.4000081" id="Shape" fill="url(#linearGradient-2)" fill-rule="nonzero"></path>
        <path d="M12.7655185,9 C10.4691126,12.5434692 11.3845244,17.3413872 14.8101424,19.7168559 C15.8700284,20.4517923 17.0943014,20.8935559 18.3661585,21 L21.5,15.4828876 C20.3281679,16.9519632 18.227184,17.1601629 16.8069829,15.9482593 C16.3245901,15.536681 15.9638278,14.9930725 15.7658989,14.3795195" id="Shape" fill="url(#linearGradient-3)" fill-rule="nonzero"></path>
        <path d="M18.3454545,20.978719 C22.293256,21.2850585 25.735558,18.2480537 26.0341362,14.1953505 C26.1304666,12.8876873 25.884593,11.5773566 25.3219676,10.4 L18.8575068,10.4 C20.6247804,10.4083657 22.0511338,11.8859883 22.0429846,13.700481 C22.0396614,14.4345466 21.7969874,15.1463292 21.3536673,15.7223048" id="Shape" fill="url(#linearGradient-4)" fill-rule="nonzero"></path>
      </g>
    </g>
  </g>
</svg>

        `;
            btn.onclick = function () {
              btn.disabled = true;
              var isOld = false;
              var jsonRaw = localStorage.getItem('lscommentTasks-v2');
              if (Object.is(jsonRaw, "{}")) {
                jsonRaw = localStorage.getItem('commentTasks');
                isOld = true;
              }
              if (jsonRaw) {
                var json = JSON.parse(jsonRaw);
                if (json) {
                  var taskId = document.location.pathname.split('/t/')[1] || document.querySelector('[data-task]') &&
                    document.querySelector('[data-task]').getAttribute('data-task');
                  if (taskId) {
                    btn.classList.add('cu-chrome-extension-attach-btn-is-loading');
                    chrome.runtime.sendMessage({
                        'CU-CONTENT-SCRIPT': {
                          taskId,
                          token: localStorage.getItem('id_token'),
                          json
                        }
                      },
                      function (json) {
                        if (isOld) {
                          localStorage.setItem('commentTasks', JSON.stringify(json));
                        } else {
                          localStorage.setItem('lscommentTasks-v2', JSON.stringify(json));
                        }
                        var handler = function () {
                          if (btn = document.querySelector('.cu-chrome-extension-attach-btn-is-loading')) {
                            btn.classList.remove('cu-chrome-extension-attach-btn-is-loading');
                            btn.disabled = false;
                            document.querySelector('.tooltip') && document.querySelector('.tooltip').remove();
                            btn.remove();
                          }
                          document.removeEventListener('CU_CHROME_EXTENSION_END_UPLOAD', handler);
                        };
                        document.addEventListener('CU_CHROME_EXTENSION_END_UPLOAD', handler, false);
                        var newEvent = document.createEvent('Event');
                        newEvent.initEvent('CU_CHROME_EXTENSION_START_UPLOAD', true, true);
                        document.dispatchEvent(newEvent);
                        document.querySelector('.tooltip') && document.querySelector('.tooltip').remove();
                        btn.remove();
                        chrome.storage.local.remove('screenshot');
                      });
                  }
                }
              }
            };
            var appendElement = document.querySelector(
              '.comment-bar.comment-bar_active .comment-bar__controls');
            if (appendElement) {
              appendElement.parentNode.insertBefore(btn, appendElement);
            }
          }
        } else {
          document.querySelector('.cu-chrome-extension-attach-btn')
          && document.querySelector('.cu-chrome-extension-attach-btn').remove();
        }
      });
    }
  }, 1000);

  window.onbeforeunload = function () {
    clearInterval(intertmp);
  };

  var contentScript;
  contentScript = setInterval(checkIsLoggedIn, 1000);

  function checkIsLoggedIn() {
    try {
      if (chrome && chrome.storage) {
        chrome.storage.local.get('token', function (d) {
          if (d.hasOwnProperty('token') && d.token) {
            chrome.storage.sync.get('isTimeEnabled', function (dd) {
              if (dd['isTimeEnabled'] !== false) {
                injectContentScript();
              }
              clearInterval(contentScript);
            })
          }
        });
      }
    } catch (e) {
      clearInterval(contentScript);
    }
  }

  function injectContentScript() {
    /*chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
      var timeTrackingDropdown = document.getElementsByClassName('cu-dropdown__menu_time-tracking');

      for (var i = 0; i < timeTrackingDropdown.length; i++) {
        if (!timeTrackingDropdown[i].classList.contains('cu-invisible')) {

          var timerBlock = timeTrackingDropdown[i].getElementsByClassName('cu-google-chrome-ext__timer');
          var taskId;

          for (var j = 0; j < timerBlock.length; j++) {
            taskId = timerBlock[j].dataset.taskId;
          }

          var startStopText = timeTrackingDropdown[i].getElementsByClassName('cu-google-chrome-ext__timer-title_start');

          for (var k = 0; k < startStopText.length; k++) {
            if (startStopText[k] && taskId && message.timerCs) {
              startStopText[k].innerHTML = (message.timerCs === 'start' && taskId === message.task.id)
                ? 'Stop'
                : 'Start';
            }
          }

          var timerButton = timeTrackingDropdown[i].getElementsByClassName('cu-google-chrome-ext__timer-button-target');

          for (var l = 0; l < timerButton.length; l++) {
            if (timerButton[l] && taskId && message.timerCs) {
              if (message.timerCs === 'start' && taskId === message.task.id) {
                timerButton[l].classList.add('active');
              } else {
                timerButton[l].classList.remove('active');
              }
            }
          }
        }
      }

      sendResponse(true);
    });*/

    //chrome.runtime.sendMessage({timer: 'get'},
    // chrome.runtime.sendMessage({timer: 'current'},
    //   function (response) {
    //     setInterval(function () {
    //       if (document.getElementById('timeTrackingItem') &&
    //         document.getElementById('cu-chrome-ext') === null) {
    //         var elem = document.createElement('div');
    //         elem.innerHTML = '<button></button>';
    //         elem.id = 'cu-chrome-ext';
    //         elem.className = 'chrome-extension-container';
    //         document.querySelector('.cu-task-info.cu-task-info_time-tracking').insertBefore(elem, document.querySelector('.cu-task-info.cu-task-info_time-tracking').children[1]);
    //
    //         document.getElementById('cu-chrome-ext').onclick = function (event) {
    //           event = event || window.event; // (*)
    //           console.log(event);
    //           var isActive = event.target.className === 'active';
    //           var path = document.location.pathname.split('/');
    //           var teamId = path[1];
    //           var spaceId = path[2];
    //           var taskId = path[4];
    //           var taskName = document.querySelector('textarea.task-name').value || '';
    //           chrome.runtime.sendMessage({
    //               timer: isActive ? 'stop' : 'start', task: {
    //                 id: taskId,
    //                 name: taskName,
    //                 teamId: teamId,
    //                 spaceId: spaceId,
    //                 url: document.location.href
    //               }
    //             },
    //             function (response) {
    //               console.log(response);
    //             });
    //         };
    //
    //       }
    //     }, 1000);
    //   }
    // );
    /*chrome.runtime.sendMessage({timer: 'get'},
      function (response) {
        setInterval(function () {

          var timeTrackingDropdown = document.getElementsByClassName('cu-dropdown__menu_time-tracking');

          for (var i = 0; i < timeTrackingDropdown.length; i++) {
            if (!timeTrackingDropdown[i].classList.contains('cu-invisible')) {

              var timerBlock = timeTrackingDropdown[i].getElementsByClassName('cu-google-chrome-ext__timer');

              for (var j = 0; j < timerBlock.length; j++) {
                if (!timerBlock[j].classList.contains('cu-google-chrome-ext_installed')) {
                  timerBlock[j].className += ' cu-google-chrome-ext_installed';

                  var getExtElem = document.getElementsByClassName('cu-google-chrome-ext__get-ext');

                  for (var k = 0; k < getExtElem.length; k++) {
                    getExtElem[k].remove();
                  }

                  var button = document.getElementsByClassName('cu-google-chrome-ext__timer-button');
                  for (var l = 0; l < button.length; l++) {
                    button[l].onclick = function (event) {
                      event = event || window.event; // (*)
                      event.preventDefault();
                      event.stopImmediatePropagation();
                      var buttonClicked = event.target;
                      var timerEl = event.target.parentElement.parentElement;
                      var taskUrl = 'https://' + timerEl.dataset.taskUrl;
                      var teamId = timerEl.dataset.teamId;
                      var spaceId = timerEl.dataset.spaceId;
                      var taskId = timerEl.dataset.taskId;
                      var taskName = timerEl.dataset.taskName || '';
                      var taskStatusColor = timerEl.dataset.taskStatusColor || '';
                      var isActive = buttonClicked.classList.contains('active');
                      chrome.runtime.sendMessage({
                          clickup: true,
                          timer: isActive ? 'stop' : 'start',
                          task: {
                            id: taskId,
                            name: taskName,
                            teamId: teamId,
                            spaceId: spaceId,
                            url: taskUrl,
                            status: {
                              color: taskStatusColor
                            }
                          }
                        },
                        function (response) {
                          // console.log(response);
                        });
                    };
                  }
                }
              }
            }
          }

        }, 1000);
      }
    );*/

  }

} catch (e) {
}
if (port) {
  port.onDisconnect.addListener(function () {
    if (intertmp) {
      clearInterval(intertmp);
    }
  });
}


