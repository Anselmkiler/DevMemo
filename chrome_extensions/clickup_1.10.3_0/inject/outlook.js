// console.log('injected' + new Date().getTime());
window.isGmailInjected = true;

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  // console.log(message);
  var scrollEl = document.querySelector('._1Hg8Xior6-IBKo0F9-25T7.customScrollBar._3SScZSIMHCG0mQX3LfHKrR');
  if (message && message.gmail && message.gmail === 'done' && scrollEl) {
    scrollEl.classList.remove('pulse');
  }
  if (message && message.attachedTasks && message.attachedTasks && message.attachedTasks.tasks &&
    message.attachedTasks.id) {
    var pp = document.querySelector(
      '[data-convid="' + message.attachedTasks.id + '"]');
    if (pp) {
      if (!pp.querySelector('div.cu-gmail-container')) {
        var container = document.createElement('div');
        container.className = 'cu-gmail-container';
        // pp.querySelector('.YPLuJFkgGK34etG1TZUef').appendChild(container);
        if (pp.querySelector('._24Ur2oCdGv_KCSejfCwqfI')) {
          if (document.querySelector('._3wtqTxNbTv6J1petgsxRHD._2YkIDpNr1NzUdbSIhsaRb9')) {
            // console.log(1);
            document.querySelector('._3wtqTxNbTv6J1petgsxRHD._2YkIDpNr1NzUdbSIhsaRb9 .allowTextSelection span').
              appendChild(container);
          }
        }
      }
      message.attachedTasks.tasks.forEach(function (task) {
        if (task && task.id && task.name && task.url) {
          var newEl = document.createElement('div');
          newEl.innerHTML = '<a class="cu-gmail-attached-task" data-cu-task-id="' + task.id + '" href="' + task.url +
            '" target="_blank"><svg height="16px" width="16px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="57 -20 50 64" xml:space="preserve">\n\t<path fill="#fff" d="M82.2,34.3c8.7,0,16.2-5,19.5-12.2c0.2-0.6,0.4-1.3,0.5-1.9c-0.1-3.9-2.2-5.8-3.1-6.4l-0.3-0.2\n\t\tc0,8.9-7.5,16.1-16.6,16.1h0c-9.1,0-16.6-7.2-16.6-16.1l-0.3,0.2c-0.9,0.6-3,2.6-3.1,6.4c0.1,0.7,0.2,1.3,0.5,1.9\n\t\tC66,29.3,73.5,34.3,82.2,34.3L82.2,34.3z M82-3.3l21,14.1c0.1-1-0.1-5.1-6.3-10.4L84.3-9.3C83.6-9.7,82.8-10,82-10H82\n\t\tc-0.8,0-1.6,0.3-2.2,0.7L67.3,0.4c-6.2,5.3-6.4,9.4-6.3,10.4L82-3.3L82-3.3z"/>\n</svg> # <span class="cu-gmail-attached-task__name">' +
            task.id + '</span></a>';
          if (document.querySelector('.cu-gmail-container')) {
            if (document.querySelector('[data-cu-task-id="' + task.id + '"]')) {
              document.querySelector('[data-cu-task-id="' + task.id + '"]').remove();
            }
            document.querySelector('.cu-gmail-container').appendChild(newEl);
          }
        }
      });
    }
  }
  sendResponse(true);
});

var addCUBtn = function () {
  var allMsgs = document.querySelectorAll('._6qarDFSgDP3FsVcEa23bi');
  // console.log(allMsgs);
  if (allMsgs) {
    allMsgs.forEach(function (parent) {
      // console.log(parent.getAttribute('data-message-id'));
      if (!parent.querySelector('.cu-chrome-extension-gmail.cu-screenshot__action-btn')) {
        var btn = document.createElement('button');
        btn.title = 'Add To ClickUp';
        btn.innerHTML = '<svg height="16px" width="16px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="57 -20 50 64" xml:space="preserve">\n\t<path fill="#fff" d="M82.2,34.3c8.7,0,16.2-5,19.5-12.2c0.2-0.6,0.4-1.3,0.5-1.9c-0.1-3.9-2.2-5.8-3.1-6.4l-0.3-0.2\n\t\tc0,8.9-7.5,16.1-16.6,16.1h0c-9.1,0-16.6-7.2-16.6-16.1l-0.3,0.2c-0.9,0.6-3,2.6-3.1,6.4c0.1,0.7,0.2,1.3,0.5,1.9\n\t\tC66,29.3,73.5,34.3,82.2,34.3L82.2,34.3z M82-3.3l21,14.1c0.1-1-0.1-5.1-6.3-10.4L84.3-9.3C83.6-9.7,82.8-10,82-10H82\n\t\tc-0.8,0-1.6,0.3-2.2,0.7L67.3,0.4c-6.2,5.3-6.4,9.4-6.3,10.4L82-3.3L82-3.3z"/>\n</svg>';
        btn.className = 'cu-chrome-extension-gmail cu-screenshot__action-btn';
        var convEl = document.querySelector(
          '.YPLuJFkgGK34etG1TZUef._24Ur2oCdGv_KCSejfCwqfI').parentElement.parentElement;
        var msgID = convEl.getAttribute('data-convid');
        btn.onclick = function (ev) {
          chrome.storage.local.set({url: '/email'});
          ev.preventDefault();
          ev.stopImmediatePropagation();
          if (document.getElementById('clickup-chrome-extension-frame-box')) {
            document.getElementById('clickup-chrome-extension-frame-box').remove();
          }
          var el2 = parent.querySelector('div._3z9ix0Ue99trWXkNz-xubm._3T_0izEBoQ4deL5A42nKOm.allowTextSelection');
          if (parent.querySelector('[data-icon-name="More"]') && el2.getBoundingClientRect().height === 0) {
            parent.querySelector('[data-icon-name="More"]').click();
          }
          var scrollEl = document.querySelector('._1Hg8Xior6-IBKo0F9-25T7.customScrollBar._3SScZSIMHCG0mQX3LfHKrR');
          scrollEl.classList.add('pulse');
          setTimeout(function () {
            scrollEl.classList.remove('pulse');
          }, 500);
          if (window.innerHeight < (el2.getBoundingClientRect().height +
            el2.getBoundingClientRect().top)) {
            scrollEl.
              scroll(0, scrollEl.scrollTop +
                parent.querySelector('._1FlPSu-rTEVeiEA_uwwhyK._2_Fga_W1WnFlfCD2ZmXK2a').offsetHeight);
          }
          el2.style.padding = '5px';
          var attributes = parent.querySelector('._1FlPSu-rTEVeiEA_uwwhyK._2_Fga_W1WnFlfCD2ZmXK2a').
            parentNode.
            querySelectorAll('[download_url]');
          var att = [];
          if (attributes) {
            attributes.forEach(function (el) {
              att.push(el.getAttribute('download_url'));
            });
          }
          var regex = /[a-z0-9\.\-\_]+@[a-z0-9\.]+/img;
          var emailEl = parent.querySelector('._2gIHyl6dQwPnFYZasfY8zh span');
          if (emailEl) {
            email = emailEl.getAttribute('aria-label').match(regex) &&
              emailEl.getAttribute('aria-label').match(regex)[0];
          } else {
            email = '';
          }
          var fromEl = document.querySelector(
            '._3Z5n8Twgu0Hm8h3pSAqCVR.allowTextSelection div._1zUSGV1j3vMbvkeFc3xt27 span');
          if (fromEl) {
            from = fromEl.textContent.match(regex) && fromEl.textContent.match(regex)[0];
          } else {
            from = '';
          }
          setTimeout(function () {
            // console.log(msgID);
            chrome.runtime.sendMessage({
              method: 'captured',
              left: el2.getBoundingClientRect().left,
              top: el2.getBoundingClientRect().top < scrollEl.getBoundingClientRect().top
                ? scrollEl.getBoundingClientRect().top
                : el2.getBoundingClientRect().top,
              width: el2.getBoundingClientRect().width,
              height: el2.getBoundingClientRect().height > window.innerHeight
                ? window.innerHeight -
                parent.querySelector('._1FlPSu-rTEVeiEA_uwwhyK._2_Fga_W1WnFlfCD2ZmXK2a').offsetTop
                : el2.getBoundingClientRect().height,
              devicePixelRatio: window.devicePixelRatio,
              title: document.title,
              ext: true,
              gmail: {
                html: parent.querySelector(
                  'div._3z9ix0Ue99trWXkNz-xubm._3T_0izEBoQ4deL5A42nKOm.allowTextSelection').innerHTML,
                data: {
                  email: email,
                  id: msgID,
                  subject: convEl.querySelector('._2oS4t0YANyzQh_CKsUMMbR span') &&
                    convEl.querySelector('._2oS4t0YANyzQh_CKsUMMbR span').textContent || '',
                  from: from,
                  attachments: att,
                  msg: '',
                  client: 'outlook'
                }
              }
            }, function (r) {

            });
          }, 500);
        };
        if (parent.querySelector('.ms-OverflowSet.ms-CommandBar-primaryCommand')) {
          parent.querySelector('.ms-OverflowSet.ms-CommandBar-primaryCommand').appendChild(btn);
          // console.log(msgID);
          chrome.runtime.sendMessage({getAttachedTasks: msgID}, function (r) {
            // console.log('r', r);
          });
        }
      }
    });
  }
  // console.log(location.hash);
};

var interval = setInterval(function () {
  if (document.readyState === 'complete') {
    setTimeout(function () {
      addCUBtn();
      window.addEventListener('hashchange', function () {
        // console.log('changed');
        if (document.getElementById('clickup-chrome-extension-frame-box')) {
          document.getElementById('clickup-chrome-extension-frame-box').remove();
        }
        addCUBtn();
      });
      /*document.querySelectorAll('.adf.ads').forEach(function (el) {
        el.addEventListener('click', function () {
          if (document.getElementById('clickup-chrome-extension-frame-box')) {
            document.getElementById('clickup-chrome-extension-frame-box').remove();
          }
          setInterval(function () {
            addCUBtn();
          }, 500);
        });
      });
      document.querySelectorAll('.zA').forEach(function (el) {
        el.addEventListener('click', function () {
          if (document.getElementById('clickup-chrome-extension-frame-box')) {
            document.getElementById('clickup-chrome-extension-frame-box').remove();
          }
          setInterval(function () {
            addCUBtn();
          }, 500);
        });
      });*/
      // clearInterval(interval);
    }, 500);
  }
}, 1000);
