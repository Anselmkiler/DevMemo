if (background === undefined) {
  var background = (function () {
    let tmp = {};
    //
    chrome.runtime.onMessage.addListener(function (request) {
      for (let id in tmp) {
        if (tmp[id] && (typeof tmp[id] === "function")) {
          if (request.path === "background-to-page") {
            if (request.method === id) {
              tmp[id](request.data);
            }
          }
        }
      }
    });
    //
    return {
      "receive": function (id, callback) {
        tmp[id] = callback;
      },
      "send": function (id, data) {
        chrome.runtime.sendMessage({
          "method": id, 
          "data": data,
          "path": "page-to-background"
        }, function () {
          return chrome.runtime.lastError;
        });
      }
    }
  })();
  
  var config = {
    "STATE": "OFF",
    "listener": {
      "click": function (e) {
        config.STATE === "ON" ? config.panel.create(e) : config.panel.remove();
      },
      "keydown": function (e) {
        let key = e.which || e.keyCode;
        if (key === 27) {
          background.send("store", {"state": "OFF"});
        }
      }
    },
    "render": function (e) {
      config.STATE = e.state;
      //
      if (config.STATE === "OFF") {
        config.panel.remove();
        config.overlay.hide();
        document.removeEventListener("click", config.listener.click, true);
        document.removeEventListener("keydown", config.listener.keydown, false);
      } else {
        config.overlay.show();
        window.addEventListener("click", config.listener.click, true);
        document.addEventListener("keydown", config.listener.keydown, false);
      }
    },
    "overlay": {
      "hide": function () {
        const rect = document.querySelector(".inspector-mode-tag");
        const container = document.querySelector(".inspector-mode-container");
        //
        if (rect) rect.remove();
        if (container) container.remove();
        document.documentElement.removeAttribute("font-inspector-mode");
      },
      "show": function () {
        const rect = document.createElement("div");
        const container = document.createElement("div");
        /*  */
        rect.textContent = "Inspector Mode...";
        rect.className = "inspector-mode-tag";
        container.className = "inspector-mode-container";
        /*  */
        document.documentElement.setAttribute("font-inspector-mode", '');
        document.body.appendChild(container);
        document.body.appendChild(rect);
      }
    },
    "panel": {
      "remove": function () {
        let iframe = document.getElementById("font-inspector-iframe");
        if (iframe) {
          iframe.parentNode.removeChild(iframe);
        }
      },
      "create": function (e) {
        if (e.preventDefault) e.preventDefault();
        if (e.stopPropagation) e.stopPropagation();
        if (e.stopImmediatePropagation) e.stopImmediatePropagation();
        //
        if (window === window.top) {
          let iframe = document.getElementById("font-inspector-iframe");
          if (!iframe) {
            //
            iframe = document.createElement("iframe");
            iframe.setAttribute("class", "modal-iframe");
            iframe.setAttribute("id", "font-inspector-iframe");
            iframe.addEventListener("load", config.panel.render, true);
            document.body.appendChild(iframe);
            //
            window.setTimeout(config.panel.render, 100);
          }
          //
          iframe.style.top = (e.y + 32) + "px";
          iframe.style.left = (e.x - 250) + "px";
          //
          const cond_1 = e.target.id === "font-inspector-textarea";
          const cond_2 = e.target.id === "font-inspector-iframe";
          const cond_3 = this === iframe;
          if (cond_1 || cond_2 || cond_3) return;
          //
          background.send("font", {
            "font": config.font.analyze(e.target)
          });
        }
      },
      "render": function () {
        let iframe = document.getElementById("font-inspector-iframe");
        if (iframe) {
          let doc = iframe.contentDocument;
          if (doc) {
            let link = doc.getElementById("font-inspector-css");
            if (!link) {
              link = doc.createElement("link");
              link.setAttribute("type", "text/css");
              link.setAttribute("rel", "stylesheet");
              link.setAttribute("id", "font-inspector-css");
              link.setAttribute("href", chrome.runtime.getURL("data/content_script/resources/popup.css"));
              doc.documentElement.appendChild(link);
            }
            //
            let textarea = doc.getElementById("font-inspector-textarea");
            if (!textarea) {
              textarea = doc.createElement("textarea");
              textarea.setAttribute("id", "font-inspector-textarea");
              textarea.setAttribute("class", "modal-textarea");
              textarea.setAttribute("spellcheck", "false");
              doc.body.setAttribute("class", "modal-body");
              doc.body.appendChild(textarea);
              //
              let info = doc.createElement("a");
              info.textContent = "?";
              info.setAttribute("rel", "noopener");
              info.setAttribute("target", "_blank");
              info.setAttribute("class", "modal-info");
              info.setAttribute("id", "font-inspector-info");
              info.title = "See more info about the rendered font via " + config.font.viewer;
              doc.body.appendChild(info);
              //
              textarea.textContent = `1. Click on any element within this page to view font-info.\n2. To hide this popup window, please click on the toolbar icon once.\n3. To copy the font info, please select (or click on) a desired text and then press - Ctrl + C - or right click and select - copy - from the context menu.`;
            }
          }
        }
      }
    },
    "font": {
      "rendered": '',
      "viewer": "webbrowsertools.com/font-viewer/",
      "result": function (font) {
        let iframe = document.getElementById("font-inspector-iframe");
        if (iframe) {
          let doc = iframe.contentDocument;
          if (doc) {
            let textarea = doc.getElementById("font-inspector-textarea");
            if (textarea) {
              font["Tab ID"] = font["tabId"];
              font["Tab title"] = font["title"];
              font["Tab hostname"] = location.hostname;
              //
              delete font["top"];
              delete font["title"];
              delete font["tabId"];
              //
              let str = JSON.stringify(font, null, 2);
              if (str) {
                str = str.
                replace('{', 'Info for selected <' + font["HTML element type"] + '> element:').
                replace('}', '').replace(/\"/g, '').
                replace(/\-\,/g, '').
                replace(/  \(/g, '(').
                replace(/\)\: /g, ') ').
                replace(/\:\ \-\-\-/g, ' ').
                replace(/\,(?:\r\n|\r|\n)/g, '\n');
                //
                textarea.textContent = str;
              }
            }
          }
        }
      },
      "inspect": function (e) {
        let result = "System Default";
        try {
          let node = document.createElement("span");
          node.textContent = "QQwWeErRtTyYuUiIoOpP1!2@3#4$5%6^7&8*9(0)";
          node.style.fontFamily = e;
          document.body.appendChild(node);
          //
          const ref = node.getBoundingClientRect();
          const list = e.replace(';', '').split(/\s*,\s*/);
          //
          for (let i = 0; i < list.length; i++) {
            let font = list[i];
            node.style.fontFamily = font;
            //
            const rect = node.getBoundingClientRect();
            const cond_1 = rect.width === ref.width;
            const cond_2 = rect.height === ref.height;
            //
            if (cond_1 && cond_2) {
              result = font;
              break;
            }
          }
          //
          document.body.removeChild(node);
        } catch (e) {}
        //
        return result;
      },
      "analyze": function (node) {
        let style = window.getComputedStyle(node);
        config.font.rendered = config.font.inspect(style["font-family"]);
        //
        let iframe = document.getElementById("font-inspector-iframe");
        if (iframe) {
          let doc = iframe.contentDocument;
          if (doc) {
            let a = doc.getElementById("font-inspector-info");
            a.setAttribute("href", "https://" + config.font.viewer + "?family=" + config.font.rendered);
          }
        }
        //
        return {
          //
          '(I)': '--------------------------------------------------------',
          //
          'Font size': style['font-size'] || 'N/A',
          'Font style': style['font-style'] || 'N/A',
          'Font weight': style['font-weight'] || 'N/A',
          'Font letiant': style['font-letiant'] || 'N/A',
          'Font family': style['font-family'].replace(/\"/g, '') || 'N/A',
          'Rendered font family [estimated]': config.font.rendered || 'N/A',
          //
          '(II)': '-------------------------------------------------------',
          //
          'Font color': style["color"] || 'N/A',
          'Background color': style['background-color'] || 'N/A',
          //
          '(III)': '-------------------------------------------------------',
          //
          'Text align': style['text-align'] || 'N/A',
          'Text indent': style['text-indent'] || 'N/A',
          'Line height': style['line-height'] || 'N/A',
          'Text transform': style['text-transform'] || 'N/A',
          'Text decoration': style['text-decoration'] || 'N/A',
          //
          '(IV)': '-------------------------------------------------------',
          //
          'HTML element id': node.id || 'N/A',
          'HTML element class': [...node.classList].join(', ') || 'N/A',
          'HTML element type': node.localName || 'N/A',
          //
          '(V)': '--------------------------------------------------------',
          //
        };
      }
    }
  };
  //
  background.receive("storage", config.render);
  background.receive("result", config.font.result, false);
}

background.send("load");
