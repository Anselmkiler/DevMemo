window.isGmailInjected = true;
var cuIsInboxView = document.location.host === 'inbox.google.com';

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message && message.attachedTasks && message.attachedTasks && message.attachedTasks.tasks &&
    message.attachedTasks.id) {
    var pp = document.querySelector(
      '[data-cu-thread-id="' + message.attachedTasks.id + '"]');
    if (pp) {
      message.attachedTasks.tasks.forEach(function (task) {
        if (task && task.id && task.name && task.url) {
          var newEl = document.createElement('div');
          newEl.innerHTML = '<a class="cu-gmail-attached-task" data-cu-task-id="' + task.id + '" href="' + task.url +
            '" target="_blank"> <img src="' + chrome.runtime.getURL('assets/logo-color.png') +
            '" width="22"/> <span class="cu-gmail-attached-task__name">' +
            task.name + '</span></a>';
          if (pp) {
            if (pp.querySelector('[data-cu-task-id="' + task.id + '"]')) {
              pp.querySelector('[data-cu-task-id="' + task.id + '"]').remove();
            }
            pp.appendChild(newEl);
          }
        }
      });
      pp.parentElement.style.display = 'block';
    }
  }
  sendResponse(true);
});

function getUserSuffix(url) {
  var res = /^https\:\/\/\w+\.google\.com\/(u\/\d\/)/.exec(url);
  return res ? res[1] : '';
}

function toDataUrl(url) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      var reader = new FileReader();
      reader.onloadend = function () {
        resolve(reader.result);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.onerror = reject;
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  });
}

function attachThreadLink(threadView) {

  threadView.getThreadIDAsync().then(function (threadId) {
    if (!threadId) return;
    var userSuffix = getUserSuffix(window.location.href);
    var link = document.createElement('a');
    link.href = 'https://mail.google.com/mail/' + userSuffix + '#all/' + threadId;
    var newDiv = document.createElement('div');
    newDiv.className = 'cu-gmail-container';
    newDiv.setAttribute('data-cu-thread-id', threadId);

    var noticeBar = threadView.addNoticeBar().el;
    noticeBar.style.display = 'none';
    noticeBar.style.background = 'none';
    noticeBar.style.margin = '0px 0px 0 10px';
    noticeBar.style.padding = '5px';
    noticeBar.appendChild(newDiv);
    threadView.getMessageViewsAll().forEach(function (messageView) {
      var handler = function (messageView) {
        /*messageView.getFileAttachmentCardViews().forEach(function (attachment) {
          console.log(attachment);
          attachment.addButton({
            iconUrl: chrome.extension.getURL('/assets/icon-16.png'),
            tooltip: 'Add To ClickUp',
            onClick: function (ev) {
              console.log(ev);
              ev.getDownloadURL().then(function (u) {
                console.log(u);
                fetch(u).then(response => {
                  if (response && response.redirected && response.url) {
                    console.log(response.url);
                  }
                })
              });
            }
          });
          attachment.on('AttachmentCardClickEvent', function (event) {
            console.log(event);
          });
        });*/
        var el = messageView.getBodyElement();
        var parentHeader = el.parentElement;
        var parent = parentHeader.parentElement.parentElement.parentElement.parentElement.parentElement;
        if (!cuIsInboxView) {
          parent = parent.querySelector('[data-message-id]');
          if (parent.getAttribute('data-message-id')) {
            if (!parent.querySelector('.cu-chrome-extension-gmail.cu-screenshot__action-btn')) {
              var btn = document.createElement('button');
              btn.title = 'Add To ClickUp';
              btn.innerHTML = '<img src="' + chrome.runtime.getURL('assets/logo-color.png') + '" width="22"/>';
              btn.className = 'cu-chrome-extension-gmail cu-screenshot__action-btn';
              var msgID = threadId;
              btn.onclick = function (ev) {
                chrome.storage.local.set({url: '/email'});
                ev.preventDefault();
                ev.stopImmediatePropagation();
                if (document.getElementById('clickup-chrome-extension-frame-box')) {
                  document.getElementById('clickup-chrome-extension-frame-box').remove();
                }
                var el2 = parent.querySelector('.a3s');
                if (parent.querySelector('.ajR') && el2.getBoundingClientRect().height < 65) {
                  parent.querySelector('.ajR').click();
                }
                var scrollEl = document.querySelector('.Tm.aeJ');
                if (scrollEl === null) {
                  scrollEl = document.querySelector('.nH.age.apN');
                }
                if (scrollEl === null) {
                  scrollEl = document.querySelector('.Nu.S3.aZ6');
                }
                if (scrollEl === null) {
                  scrollEl = parent;
                }
                scrollEl.classList.add('pulse');
                setTimeout(function () {
                  if (document.querySelector('.pulse')) {
                    document.querySelector('.pulse').classList.remove('pulse');
                  }
                }, 2000);
                el2.style.padding = '5px';
                var attributes = parent.querySelector('.ii.gt').parentNode.querySelectorAll('[download_url]');
                var att = [];
                if (attributes) {
                  attributes.forEach(function (el) {
                    att.push(el.getAttribute('download_url'));
                  });
                }

                var unfurlImages = new Promise(function (resolve, reject) {
                  var proxiedImages = document.querySelectorAll('.a3s img[src]');
                  if (proxiedImages && proxiedImages.length) {
                    var imgCount = proxiedImages.length;
                    proxiedImages.forEach(function (img) {
                      if (img.src && img.src.startsWith('https://mail.google.com/mail/u')) {
                        toDataUrl(img.src).then(base64value => {
                          img.src = base64value;
                          imgCount--;
                          if (imgCount === 0) {
                            resolve();
                          }
                        }).catch(function () {
                          imgCount--;
                          if (imgCount === 0) {
                            resolve();
                          }
                        });
                        /*fetch(img.src).then(function (response) {
                          if (response && response.redirected && response.url) {
                            img.src = response.url;
                          }
                          imgCount--;
                          if (imgCount === 0) {
                            resolve();
                          }
                          return response;
                        }).catch(function () {
                          imgCount--;
                          if (imgCount === 0) {
                            resolve();
                          }
                        });*/
                      } else {
                        imgCount--;
                        if (imgCount === 0) {
                          resolve();
                        }
                      }
                    });
                  } else {
                    resolve();
                  }
                });

                unfurlImages.then(function () {
                  setTimeout(function () {
                    // console.log(msgID);
                    var captureWidth = el2.getBoundingClientRect().width;
                    var captureHeight = (el2.clientHeight > scrollEl.clientHeight) ? scrollEl.clientHeight : el2.clientHeight;
                    if (scrollEl && scrollEl.clientWidth && (el2.getBoundingClientRect().width > scrollEl.clientWidth)) {
                      captureWidth = scrollEl.clientWidth - 70;
                    }
                    chrome.runtime.sendMessage({
                      method: 'captured',
                      left: el2.getBoundingClientRect().left,
                      top: el2.getBoundingClientRect().top < scrollEl.getBoundingClientRect().top
                        ? scrollEl.getBoundingClientRect().top
                        : el2.getBoundingClientRect().top,
                      width: captureWidth,
                      height: captureHeight - 200,
                      devicePixelRatio: window.devicePixelRatio,
                      title: document.title,
                      ext: true,
                      gmail: {
                        html: parent.querySelector('.a3s').innerHTML,
                        data: {
                          email: document.querySelector('[data-inboxsdk-user-email-address]').getAttribute('data-inboxsdk-user-email-address'),
                          id: msgID,
                          subject: threadView.getSubject(),
                          from: messageView.getSender().emailAddress,
                          attachments: att,
                          msg: parent.getAttribute('data-message-id').match(/-/)
                            ? document.querySelector('[data-legacy-message-id]').getAttribute('data-legacy-message-id')
                            : parent.getAttribute('data-message-id'),
                          client: cuIsInboxView ? 'inbox' : 'gmail'
                        }
                      }
                    }, function (r) {

                    });
                  }, 500);
                });
              };
              parent.querySelector('.gE.iv').appendChild(btn);
              // console.log(msgID);
              chrome.runtime.sendMessage({getAttachedTasks: msgID}, function (r) {
                // console.log('r', r);
              });
            }
          }
        } else {
          if (parentHeader.querySelector('.b5') &&
            !parentHeader.querySelector('.cu-chrome-extension-gmail.cu-screenshot__action-btn')) {
            var btn = document.createElement('button');
            btn.title = 'Add To ClickUp';
            btn.innerHTML = '<img src="' + chrome.runtime.getURL('assets/logo-color.png') + '" width="22"/>';
            btn.className = 'cu-chrome-extension-gmail cu-screenshot__action-btn';
            btn.style.marginTop = '-7px';
            btn.style.float = 'left';
            var msgID = threadId;
            btn.onclick = function (ev) {
              chrome.storage.local.set({url: '/email'});
              ev.preventDefault();
              ev.stopImmediatePropagation();
              if (document.getElementById('clickup-chrome-extension-frame-box')) {
                document.getElementById('clickup-chrome-extension-frame-box').remove();
              }
              if (el.querySelector('.mg') && el.getBoundingClientRect().height < 30) {
                el.querySelector('.mg').click();
              }
              parentHeader.classList.add('pulse');
              setTimeout(function () {
                parentHeader.classList.remove('pulse');
              }, 500);
              var isScrolled = false;
              if (window.innerHeight < (el.getBoundingClientRect().height +
                el.getBoundingClientRect().top)) {
                parent.querySelector('.bJ.s2').style.display = 'none';
                parent.querySelector('.vl').style.display = 'none';
                document.querySelector('.nPQzwd.iP').style.display = 'none';
                window.scroll(0,
                  document.scrollingElement.scrollTop + el.getBoundingClientRect().top -
                  document.querySelector('.hn').getBoundingClientRect().height);
                isScrolled = true;
              }

              //var attributes = parent.querySelector('.m4.s2').parentNode.querySelectorAll('[download_url]');
              var att = [];
              /*if (attributes) {
                attributes.forEach(function (el) {
                  att.push(el.getAttribute('download_url'));
                });
              }*/
              setTimeout(function () {
                // console.log(msgID);
                chrome.runtime.sendMessage({
                  method: 'captured',
                  left: el.getBoundingClientRect().left,
                  top: el.getBoundingClientRect().top,
                  width: el.getBoundingClientRect().width,
                  height: (el.getBoundingClientRect().height > window.innerHeight
                      ? window.innerHeight
                      : el.getBoundingClientRect().height) -
                    document.querySelector('.hn').getBoundingClientRect().height,
                  devicePixelRatio: window.devicePixelRatio,
                  title: document.title,
                  ext: true,
                  gmail: {
                    html: el.innerHTML,
                    data: {
                      email: document.querySelector('[data-inboxsdk-user-email-address]').getAttribute('data-inboxsdk-user-email-address'),
                      id: msgID,
                      subject: threadView.getSubject(),
                      from: messageView.getSender().emailAddress,
                      attachments: att,
                      msg: msgID,
                      client: cuIsInboxView ? 'inbox' : 'gmail'
                    }
                  }
                }, function (r) {
                  setTimeout(function () {
                    parent.querySelector('.bJ.s2').style.display = 'block';
                    parent.querySelector('.vl').style.display = 'block';
                    document.querySelector('.nPQzwd.iP').style.display = 'block';
                  }, 500);
                });
              }, 500);
            };
            parentHeader.querySelector('.hOfgWc.s2').append(btn);
            // console.log(msgID);
            chrome.runtime.sendMessage({getAttachedTasks: msgID}, function (r) {
              // console.log('r', r);
            });
          }
        }
      };

      messageView.on('load', function (event) {
        setTimeout(function () {
          handler(event.messageView);
        }, 500);
      });
      if (messageView.isLoaded()) {
        setTimeout(function () {
          handler(messageView);
        }, 500);
      }
    });

  }).catch(function () {
    console.log('[cu-inbox] => error:', arguments);
  });
}

var queueThreads = [];
var interval = setInterval(function () {
  /*var threadIds = [];
  queueThreads.forEach(function (thread, id) {
    threadIds.push(thread[0]);
  });*/
  if (Object.keys(queueThreads).length) {
    var newQueueThreads = Object.assign({}, queueThreads);
    queueThreads = [];
    chrome.runtime.sendMessage({getBulkAttachedTasks: Object.keys(newQueueThreads)}, function (threads) {
      if (threads && threads.length) {
        threads.forEach(function (thread) {
          if (thread.tasks && thread.tasks.length) {
            thread.tasks.forEach(function (task) {
              if (newQueueThreads && thread.id && newQueueThreads[thread.id] && task.id) {
                newQueueThreads[thread.id].addLabel({
                  title: `#` + task.id,
                  iconUrl: chrome.runtime.getURL('/assets/icon-16.png')
                });
              }
            });
          }
        });
      }
    });
  }
}, 1000);

function attachTasks(threadRowView) {
  threadRowView.getThreadIDIfStableAsync().then(function (threadID) {
    if (!threadID) {
      return;
    }
    queueThreads[threadID] = threadRowView;
  });
}

InboxSDK.load('2', 'sdk_clickup_a07824d634').then(function (sdk) {
  setTimeout(function () {
    sdk.Conversations.registerThreadViewHandler(attachThreadLink);
    sdk.Lists.registerThreadRowViewHandler(attachTasks);
  }, 100);
});
