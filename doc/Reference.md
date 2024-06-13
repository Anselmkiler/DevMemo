
webdev23/markletbooker

- MarkletBooker: a bookmarklet to create and edit es6+ bookmarklets

javascript:void (async()=>{let e="",t="",n="🐙";if(console.log(window.getSelection().rangeCount),window.getSelection()&&window.getSelection().rangeCount>=1){console.log(window.getSelection());try{if(t="(async () => {\n"+window.getSelection().anchorNode.parentElement.textContent+"\n})();","javascript"===window.getSelection().anchorNode.textContent.split(":")[0])return void(t=window.getSelection().anchorNode.textContent);if("javascript"===window.getSelection().anchorNode.parentElement.textContent.split(":")[0])return void(t=window.getSelection().anchorNode.parentElement.textContent);if("javascript"===window.getSelection().anchorNode.parentElement.textContent.split(":")[0])return void(t=window.getSelection().anchorNode.parentElement.textContent);if("javascript"===window.getSelection().anchorNode.parentElement.href.split(":")[0])return void(t=window.getSelection().anchorNode.parentElement.href)}catch(e){console.log(e.message)}}document.documentElement.innerHTML=document.implementation.createHTMLDocument().documentElement.outerHTML;function o(t){link.style.display="none",title.style.display="inline",console.log(t);let n=prettier.format(t,{parser:"babel",plugins:prettierPlugins});console.log(n);let o=n.split(" ");"javascript:"===o[0]&&(o.shift(),n=o.join(" ")),"void"===o[0]&&(o.shift(),n=o.join(" ")),console.log(o),console.log(n),e.setValue(n),depack.style.display="none",pack.style.display="unset"}document.querySelectorAll("[style]").forEach((e=>e.removeAttribute("style"))),document.querySelectorAll('link[rel="stylesheet"]').forEach((e=>e.parentNode.removeChild(e))),document.querySelectorAll("style").forEach((e=>e.parentNode.removeChild(e))),document.querySelectorAll("script").forEach((e=>e.parentNode.removeChild(e))),document.body.appendChild(Object.assign(document.createElement("style"),{textContent:"\n\n          body {margin:0;background:black;width:99.4%}\n          a:hover { text-decoration-style: wavy !important; z-index:999 !important}\n          button, input, i, select, summary {font-size: large;border:#b70033 solid;z-index: 5;margin: 0px 0.2rem;background:rgba(51, 46, 18, 0.24);color:#fff;border-radius: 0.4rem;padding: 0 1rem 0 1rem;font-weight: 600;letter-spacing: 0.2rem;cursor:pointer; margin: 0.5rem 0.2rem; height: 3rem; max-height: 3rem !important }\n          button:hover, input:hover, select:hover, i:hover { border: rgba(124, 0, 227, 0.93) solid 3px; background: rgba(51, 46, 18, 0.33); filter: invert(1); color:black;}\n          button:hover, select:hover{ height: 3rem;}\n          input { cursor: auto !important; height: 3rem; max-height: 3rem !important; }\n          details[open] { position: fixed; top: 0; transform: translate(calc(50vw - 50%), calc(10rem - 18%)); outline: 10000px #000000a1 solid; background: #b70033; max-height: 87vh; overflow: auto; transition: outline 0.1s ease-in; z-index: 999; width: 80%; }\n          i { font-size: 2.4rem; font-style: inherit; padding: 0.5rem; vertical-align: middle; margin: 0; }\n          input[type=file] {height: 2.4rem;padding: 1rem;width: 14rem;}\n          summary { color:ghostwhite; font-size:2.1rem; padding: 1rem 0 0.5rem 0.5rem; }\n          details[open] summary::after { content: '❌'; float: right; margin: 0.2rem 0.5rem 0 0; text-align: center }\n          details > p { background: #000; color: gainsboro; margin: 0; display: inline-flex; flex-direction: column; font-size: 1.4rem; }\n          @media (max-width:640px) { button, input, select, summary { width:100%} i {display: block;} }\n\n      "})),[["i",{id:"icon",innerHTML:n,title:"Choose another icon for your bookmarklet.",onclick:"selicon.style.display='block'"}],["input",{id:"title",placeholder:"Title... "}],["button",{id:"pack",innerHTML:"PACK to bookmarklet"}],["button",{id:"depack",innerHTML:"DEPACK the bookmarklet",style:"display:none"}],["a",{id:"link",title:"Your bookmarklet.\nDrag in the bookmark toolbar!.\nOr right click, «Bookmark this link».",style:"display:none;color:ghostwhite;font-size: xxx-large;padding: 0 1rem;vertical-align: middle;"}],["a",{id:"linksource",title:"Get last revision.",href:"https://gist.github.com/webdev23/da95ecaee0618540a9a0200750202765",textContent:"Github",style:"float:right;color:ghostwhite;font-size: large;padding: 0 1rem;vertical-align: middle;text-decoration-style: dashed;margin: 1rem;"}],["div",{id:"target",style:"width:100%; height: calc(-6.7rem + 100vh);border:1px black solid;margin-top:10px"}],["details",{id:"selicon",open:!1}]].forEach((e=>{document.body.appendChild(Object.assign(document.createElement(e[0]),e[1]))})),document.head.appendChild(Object.assign(document.createElement("link"),{id:"pageicon",rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90' stroke='white' fill='red'>🐙</text></svg>"})),await import("https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/ace.js").catch((e=>console.log("Loading failed"+e))),await import("https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/ext-language_tools.js").catch((e=>console.log("Loading failed"+e))),e=await ace.edit("target"),ace.require("ace/ext/language_tools"),ace.config.set("basePath","https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/"),e.setOptions({value:"/* PACK and DEPACK es6+ bookmarklets, valid for Firefox.\n** Please wrap your code in the async function below.\n* And click *PACK bookmarklet*\n\n* Or paste a bookmarklet in the first line in this editor to DEPACK and beautify.*/\n\n(async () => {\n\n})()",theme:"ace/theme/gob",mode:"ace/mode/javascript",enableBasicAutocompletion:!0,enableSnippets:!0,enableLiveAutocompletion:!0}),e.getSession().on("change",(function(){console.log(e.getSession().getValue().split(":")[0]),"javascript"===e.getSession().getValue().split(":")[0]?(pack.style.display="none",depack.style.display="unset"):(depack.style.display="none",pack.style.display="unset")})),pack.onclick=()=>async function(t){link.style.display="inline",title.style.display="none",await import("https://cdn.jsdelivr.net/npm/terser/dist/bundle.min.js").then((()=>{(async()=>{let o;console.log(Terser);try{o=await Terser.minify(t,{sourceMap:!1}),e.setValue("");let i=";"===o.code.charAt(o.code.length-1)?o.code.slice(0,-1):o.code;console.log(o.code.slice(0,-1)),console.log(i),i="javascript:void "+i+";",e.setOptions({value:i}),link.href=i,link.textContent=n+title.value,link.style.display="inline",pack.style.display="none",depack.style.display="unset"}catch(e){const{message:t,filename:n,line:o,col:i,pos:l}=e;console.log(t,n,"Line:"+o," Col:"+i,"Pos:"-l)}})()}))}(e.getSession().getValue()),depack.onclick=()=>o(e.getSession().getValue()),icon.onclick=()=>{selicon.appendChild(Object.assign(document.createElement("summary"),{innerHTML:"Change icon"})),selicon.style.display="unset";let e="";for(let t=9729;t<10193;t++)e+="<p><i>&#x"+t.toString(16)+";</i></p>";for(let t=127744;t<129607;t++)e+="<p><i>&#x"+t.toString(16)+";</i></p>";selicon.setAttribute("open",!0),selicon.innerHTML+=e,selicon.scrollTop=0},selicon.addEventListener("mousedown",(e=>{"I"===e.target.tagName&&(n=e.target.textContent,pageicon.href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90' stroke='white' fill='red'"+n+"</text></svg>",icon.textContent=n,selicon.open=!1,link.textContent=n+title.value,console.log(e.target.textContent),selicon.style.display="none",selicon.innerHTML="")})),depack.onclick=()=>o(e.getSession().getValue()),import("https://unpkg.com/prettier@2.2.1/standalone.js"),import("https://unpkg.com/prettier@2.2.1/parser-babel.js"),""!==t&&(console.log(window.getSelection()),e.setValue(t))})();

- 💾RePack bookmarklet. Dump static page in one html file, highlight contents, embed styles, convert images as data-uri, remove scripts.

// Bookmarklet
javascript:void (()=>{let e="";try{document.designMode="on",onmouseup=()=>{document.execCommand("backColor",!1,"chartreuse"),window.getSelection().removeAllRanges()};var n=/^\s*('|")/;[...document.styleSheets].forEach((t=>{[...t.rules].forEach((t=>{var o,c;e+=(o=t.cssText,c=function(e){var n;(n=e,fetch(n).then((e=>e.blob())).then((e=>new Promise(((n,t)=>{const o=new FileReader;o.onloadend=()=>n(o.result),o.onerror=console.log(n,t),o.readAsDataURL(e)}))))).then((e=>{console.log("RESULT:",e)}))},[/(@import\s+)(')(.+?)(')/gi,/(@import\s+)(")(.+?)(")/gi,/(url\s*\()(\s*')([^']+?)(')/gi,/(url\s*\()(\s*")([^"]+?)(")/gi,/(url\s*\()(\s*)([^\s'")].*?)(\s*\))/gi].reduce((function(e,t,o){return e.replace(t,(function(e,t,o,r,s){var a=c(r);return console.log(t,o,a,s),n.test(a)&&n.test(o)&&(o=s=""),t+o+a+s}))}),o))}))})),[...document.querySelectorAll("link")].forEach((e=>{e.outerHTML=""})),[...document.querySelectorAll("source")].forEach((e=>{var n;(n=e.src,fetch(n).then((e=>e.blob())).then((e=>new Promise(((n,t)=>{const o=new FileReader;o.onloadend=()=>n(o.result),o.onerror=t,o.readAsDataURL(e)}))))).then((n=>{console.log("RESULT SRC SOURCE:",n),e.src=n,e.srcset=""}))})),[...document.querySelectorAll("iframe")].forEach((e=>{e.sandbox="",e.src=""})),[...document.querySelectorAll("img")].forEach((e=>{var n;(n=e.src,fetch(n).then((e=>e.blob())).then((e=>new Promise(((n,t)=>{const o=new FileReader;o.onloadend=()=>n(o.result),o.onerror=t,o.readAsDataURL(e)}))))).then((n=>{console.log("RESULT:",n),e.src=n}))})),document.body.appendChild(Object.assign(document.createElement("style"),{textContent:e.split('url("undefined")').join("")})),document.head.appendChild(Object.assign(document.createElement("base"),{href:new URL(document.URL).origin})),document.head.appendChild(Object.assign(document.createElement("meta"),{httpEquiv:"Content-Security-Policy",content:"object-src 'none'; connect-src 'none' default-src 'none'; script-src 'none'; connect-src 'none'; img-src 'none'; style-src 'none'; base-uri 'none';form-action 'none'"})),document.head.appendChild(Object.assign(document.createElement("meta"),{httpEquiv:"X-Frame-Options",content:"deny"})),document.head.prepend(Object.assign(document.createComment("\n\n-- Page dumped using %F0%9F%92%BERePack bookmarklet https://gist.github.com/webdev23/0fc20feb866aaad04a515fbfae419a7c\n-- From url "+document.URL+"\n\n"),{})),[...document.scripts].forEach((e=>{e.outerHTML=""})),[...document.querySelectorAll("img")].forEach((e=>{0!=e.src.indexOf("http://")&&0!=e.src.indexOf("https://")||(e.src="")})),setTimeout((function(){let e=document.createElement("a");e.download="%F0%9F%92%BE_"+new URL(document.location.href).origin+"_"+document.title+".html",e.href=URL.createObjectURL(new Blob([document.documentElement.outerHTML])),document.designMode="off",e.click()}),1e4)}catch(e){alert("Error, offline.\nThis page has very strict Cross Origin Sharing Policies (CORS)\nand or Content Security Policies (CSP) against Cross Site Scripting (X-XSS-Protection mode block).\nThe download of assets can't succeed from a browser context.\n:(\n"+e.message)}})();

###The target:
Saving a web page that works offline into a single file, create fully static HTML pages with embedded assets.
Highlight important texts.

###The problem:
When saving a page using save page as, the browser creates a html file and one or many folders with tons of assets, images, libraries and styles. 
This becomes quickly a mess. Almost every page in the internet are not monolithic, garbled of trackers, ads scripts, dynamic components, and more.
Most pages are dynamic, the content is populated after the load, using JavaScript. This makes a page downloaded with curl or wget often unreadable, even broken. Assets are then missing, when we open with a browser this local file, many calls are sent to the original server but it often fails due to modern CSP,  CORS protections and logins. 
Relative links get broken. Likely the tab will hang indefinitely, even if the internet is working.

###The limits: 
Those sharing protections are well made, and makes in browser's JavaScript unusable on those contents.
Thus this bookmarklet won't run on most social networks, Youtube, Stackoverflow, Reddit, Imgur...
Will works on: Most internet pages with public contents, Github, MDN, Gumtree, Wikipedia, etc, etc.

###The process:
To obtain a good rendering of a page, we let our browser build the target page as we are seeing it. See the network tab in the inspector tool. Sometimes hundreds of calls are made (!). Everything is loaded.
Click the bookmarklet.
From there, all original scripts are discarded from the DOM.
The page become editable for a minimum of 10 seconds. Meanwhile you can change texts or highlight important parts with the mouse.
You can see the console for detailed messages.
All css <link> stylesheets are dumped into one single <style>, keeping the cascading behavior. Import rules for fonts and in css url() images are fetched again and transformed into inline base64 data-uri's. 
Images <img> and assets in <source> are also parsed and converted into base64 data-uri's. 
Iframes are silenced, and sanboxed.
Relative links are made usable by using a <base> rule.
New CSP and  X-Frame-Options rules are added to the document, in the view of disallowing all internet calls, if any.
After about 10 seconds, the page came as a new download.
Open it and see the inspector tools. If everything is alright, the page render well, and the network tab in the inspector tool is empty. The console is empty. The page is then fully static with embedded assets.

###The code:

(() => {
  let e = "";
  try {
    (document.designMode = "on"),
      (onmouseup = () => {
        document.execCommand("backColor", !1, "chartreuse"),
          window.getSelection().removeAllRanges();
      });
    var n = /^\s*('|")/;
    [...document.styleSheets].forEach((t) => {
      [...t.rules].forEach((t) => {
        var o, c;
        e +=
          ((o = t.cssText),
          (c = function (e) {
            var n;
            ((n = e),
            fetch(n)
              .then((e) => e.blob())
              .then(
                (e) =>
                  new Promise((n, t) => {
                    const o = new FileReader();
                    (o.onloadend = () => n(o.result)),
                      (o.onerror = console.log(n, t)),
                      o.readAsDataURL(e);
                  })
              )).then((e) => {
              console.log("RESULT:", e);
            });
          }),
          [
            /(@import\s+)(')(.+?)(')/gi,
            /(@import\s+)(")(.+?)(")/gi,
            /(url\s*\()(\s*')([^']+?)(')/gi,
            /(url\s*\()(\s*")([^"]+?)(")/gi,
            /(url\s*\()(\s*)([^\s'")].*?)(\s*\))/gi,
          ].reduce(function (e, t, o) {
            return e.replace(t, function (e, t, o, r, s) {
              var a = c(r);
              return (
                console.log(t, o, a, s),
                n.test(a) && n.test(o) && (o = s = ""),
                t + o + a + s
              );
            });
          }, o));
      });
    }),
      [...document.querySelectorAll("link")].forEach((e) => {
        e.outerHTML = "";
      }),
      [...document.querySelectorAll("source")].forEach((e) => {
        var n;
        ((n = e.src),
        fetch(n)
          .then((e) => e.blob())
          .then(
            (e) =>
              new Promise((n, t) => {
                const o = new FileReader();
                (o.onloadend = () => n(o.result)),
                  (o.onerror = t),
                  o.readAsDataURL(e);
              })
          )).then((n) => {
          console.log("RESULT SRC SOURCE:", n), (e.src = n), (e.srcset = "");
        });
      }),
      [...document.querySelectorAll("iframe")].forEach((e) => {
        (e.sandbox = ""), (e.src = "");
      }),
      [...document.querySelectorAll("img")].forEach((e) => {
        var n;
        ((n = e.src),
        fetch(n)
          .then((e) => e.blob())
          .then(
            (e) =>
              new Promise((n, t) => {
                const o = new FileReader();
                (o.onloadend = () => n(o.result)),
                  (o.onerror = t),
                  o.readAsDataURL(e);
              })
          )).then((n) => {
          console.log("RESULT:", n), (e.src = n);
        });
      }),
      document.body.appendChild(
        Object.assign(document.createElement("style"), {
          textContent: e.split('url("undefined")').join(""),
        })
      ),
      document.head.appendChild(
        Object.assign(document.createElement("base"), {
          href: new URL(document.URL).origin,
        })
      ),
      document.head.appendChild(
        Object.assign(document.createElement("meta"), {
          httpEquiv: "Content-Security-Policy",
          content:
            "object-src 'none'; connect-src 'none' default-src 'none'; script-src 'none'; connect-src 'none'; img-src 'none'; style-src 'none'; base-uri 'none';form-action 'none'",
        })
      ),
      document.head.appendChild(
        Object.assign(document.createElement("meta"), {
          httpEquiv: "X-Frame-Options",
          content: "deny",
        })
      ),
      document.head.prepend(
        Object.assign(
          document.createComment(
            "\n\n-- Page dumped using 💾RePack bookmarklet https://gist.github.com/webdev23/0fc20feb866aaad04a515fbfae419a7c\n-- From url " +
              document.URL +
              "\n\n"
          ),
          {}
        )
      ),
      [...document.scripts].forEach((e) => {
        e.outerHTML = "";
      }),
      [...document.querySelectorAll("img")].forEach((e) => {
        (0 != e.src.indexOf("http://") && 0 != e.src.indexOf("https://")) ||
          (e.src = "");
      }),
      setTimeout(function () {
        let e = document.createElement("a");
        (e.download =
          "%F0%9F%92%BE_" +
          new URL(document.location.href).origin +
          "_" +
          document.title +
          ".html"),
          (e.href = URL.createObjectURL(
            new Blob([document.documentElement.outerHTML])
          )),
          (document.designMode = "off"),
          e.click();
      }, 1e4);
  } catch (e) {
    alert(
      "Error, offline.\nThis page has very strict Cross Origin Sharing Policies (CORS)\nand or Content Security Policies (CSP) against Cross Site Scripting (X-XSS-Protection mode block).\nThe download of assets can't succeed from a browser context.\n:(\n" +
        e.message
    );
  }
})();






