'use strict';
console.log('inject.js');
if (document.querySelector('.clickup-chrome-extension-frame-box-show')) {
  document.querySelector('.clickup-chrome-extension-frame-box-show').classList.remove('clickup-chrome-extension-frame-box-show');
}
document.getElementById('clickup-floating-chrome-extension-frame-box') &&
(document.getElementById('clickup-floating-chrome-extension-frame-box').style.display = 'none');

(function (root, factory) {
  // commonjs
  if (typeof exports === 'object') {
    module.exports = factory();
    // global
  } else {
    root.VanillaToasts = factory();
  }
})(this, function () {

  // We need DOM to be ready
  if (document.readyState === 'complete') {
    init();
  } else {
    window.addEventListener('DOMContentLoaded', init);
  }

  // Initialize library
  function init() {
    // Toast container
    var container = document.createElement('div');
    container.id = 'vanillatoasts-container';
    document.body.appendChild(container);
  }

  var VanillaToasts = {};
  var autoincrement = 0;

  VanillaToasts.create = function (options) {
    var toast = document.createElement('div');
    toast.id = ++autoincrement;
    toast.id = 'toast-' + toast.id;
    toast.className = 'vanillatoasts-toast';

    // title
    if (options.title) {
      var h4 = document.createElement('h4');
      h4.className = 'vanillatoasts-title';
      h4.innerHTML = options.title;
      toast.appendChild(h4);
    }

    // text
    if (options.text) {
      var p = document.createElement('p');
      p.className = 'vanillatoasts-text';
      p.innerHTML = options.text;
      toast.appendChild(p);
    }

    // icon
    if (options.icon) {
      var img = document.createElement('img');
      img.src = options.icon;
      img.className = 'vanillatoasts-icon';
      toast.appendChild(img);
    }

    // click callback
    if (typeof options.callback === 'function') {
      toast.addEventListener('click', options.callback);
    }

    // toast api
    toast.hide = function () {
      toast.className += ' vanillatoasts-fadeOut';
      toast.addEventListener('animationend', removeToast, false);
    };

    // autohide
    if (options.timeout) {
      setTimeout(toast.hide, options.timeout);
    }

    if (options.type) {
      toast.className += ' vanillatoasts-' + options.type;
    }

    toast.addEventListener('click', toast.hide);

    function removeToast() {
      document.getElementById('vanillatoasts-container').removeChild(toast);
    }

    document.getElementById('vanillatoasts-container').appendChild(toast);
    return toast;

  };

  return VanillaToasts;

});

var monitor = window.monitor,
  capture = window.capture,
  guide = window.guide;

try {
  guide.remove();
  capture.remove();
  monitor.remove();
} catch (e) {
}

capture = (function () {
  var box, _left, _top, left, top, width, height;

  function update(e) {
    left = (e.clientX > _left ? _left : e.clientX - 1);
    top = (e.clientY > _top ? _top : e.clientY - 1);
    width = Math.abs(e.clientX - _left);
    height = Math.abs(e.clientY - _top);
    box.style.left = left + 'px';
    box.style.top = top + 'px';
    box.style.width = width + 'px';
    box.style.height = height + 'px';
  }

  function remove() {


    chrome.runtime.sendMessage({captureVisibleTab: true}, function (dataUrl) {
      const _left = (left + 1) * window.devicePixelRatio + 1;
      const _top = (top + 1) * window.devicePixelRatio + 1;
      const _width = (width - 2) * window.devicePixelRatio - 2;
      const _height = (height - 2) * window.devicePixelRatio - 2;

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      img.onload = () => {
        canvas.width = _width || img.width;
        canvas.height = _height || img.height;
        if (_width && _height) {
          ctx.drawImage(img, _left, _top, _width, _height, 0, 0, _width, _height);
        } else {
          ctx.drawImage(img, 0, 0);
        }
        const screenshot = canvas.toDataURL();
        chrome.storage.local.set({screenshot, screenshotTime: new Date().getTime()}, function () {
          setTimeout(function () {
            chrome.storage.sync.get('isEditScreenshotDefaultEnabled', function (ddd) {
              if (!ddd.hasOwnProperty('isEditScreenshotDefaultEnabled') ||
                (ddd.hasOwnProperty('isEditScreenshotDefaultEnabled') && ddd['isEditScreenshotDefaultEnabled'] ===
                  true)) {
                chrome.runtime.sendMessage({'CU-POPUP-CREATE-BOX': 'editor'});
              } else {
                chrome.runtime.sendMessage({'CU-POPUP-CREATE-BOX': 'screenshot'});
              }
            });

            if (document.getElementById('clickup-chrome-extension-frame-box')) {
              document.getElementById('clickup-chrome-extension-frame-box').style.display = 'block';
            } else {
              chrome.runtime.sendMessage({'CU-POPUP-CREATE-BOX': 'screenshot'});
            }
            if (document.getElementById('clickup-floating-chrome-extension-frame-box')) {
              // tslint:disable-next-line:max-line-length
              document.getElementById('clickup-floating-chrome-extension-frame-box').style.display = 'block';
            }
          }, 500);
        });

      };
      img.onerror = e => console.log(e);
      img.src = dataUrl;
    });
    guide.remove();
    capture.remove();
  }

  function mousedown(e) {
    // prevent content selection on Firefox
    e.stopPropagation();
    e.preventDefault();
    box = document.createElement('div');
    box.setAttribute('class', 'cu-screenshot-box');

    _left = e.clientX;
    _top = e.clientY;

    document.addEventListener('mousemove', update, false);
    document.addEventListener('mouseup', remove, false);
    document.body.appendChild(box);
  }

  return {
    install: function () {
      document.addEventListener('mousedown', mousedown, false);
    },
    remove: function () {
      document.removeEventListener('mousedown', mousedown, false);
      document.removeEventListener('mousemove', update, false);
      document.removeEventListener('mouseup', remove, false);
      if (box && box.parentNode) {
        box.parentNode.removeChild(box);
      }
    }
  };
})();

guide = (function () {
  var guide1, guide2, guide3;

  function position(left, top) {
    guide1.style.width = left + 'px';
    guide2.style.height = top + 'px';
  }

  function update(e) {
    position(e.clientX, e.clientY);
  }

  return {
    install: function () {
      guide1 = document.createElement('div');
      guide2 = document.createElement('div');
      guide3 = document.createElement('div');
      guide1.setAttribute('class', 'cu-screenshot-guide-1');
      guide2.setAttribute('class', 'cu-screenshot-guide-2');
      guide3.setAttribute('class', 'cu-screenshot-guide-3');
      document.body.appendChild(guide3);
      document.body.appendChild(guide1);
      document.body.appendChild(guide2);
      document.addEventListener('mousemove', update, false);
    },
    remove: function () {
      document.removeEventListener('mousemove', update, false);
      if (guide1 && guide1.parentNode) {
        guide1.parentNode.removeChild(guide1);
      }
      if (guide2 && guide2.parentNode) {
        guide2.parentNode.removeChild(guide2);
      }
      if (guide3 && guide3.parentNode) {
        guide3.parentNode.removeChild(guide3);
      }
      capture.remove();
    }
  };
})();

monitor = (function () {
  function keydown(e) {
    if (e.keyCode === 27) {
      guide.remove();
      capture.remove();
      monitor.remove();
    }
  }

  return {
    install: function () {
      window.addEventListener('keydown', keydown, false);
    },
    remove: function () {
      window.removeEventListener('keydown', keydown, false);
    }
  };
})();

guide.install();
capture.install();
monitor.install();
