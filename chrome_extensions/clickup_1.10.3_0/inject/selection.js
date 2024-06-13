/*
document.addEventListener('mouseup', handleMouseUp);

function handleMouseUp (evt) {
  if (window.parent === window) {
    // Top frame
    //doAwesomeThings(evt.clientX, evt.clientY);
    console.log('--------------------------');
    console.log('here');
    console.log('==========================');
  } else {
    // Pass the coordinates to upper frame
    window.parent.postMessage({
      msg: 'SALADICT_CLICK',
      mouseX: evt.clientX,
      mouseY: evt.clientY
    }, '*');
  }
}

window.addEventListener('message', evt => {
  if (evt.data.msg !== 'SALADICT_CLICK') { return; }

  let iframe = Array.from(document.querySelectorAll('iframe')).filter(f => f.contentWindow === evt.source)
    [0];
  if (!iframe) { return; }

  // calculate coordinates within current window
  let pos = iframe.getBoundingClientRect();
  console.log('--------------------------');
  console.log(pos);
  console.log('==========================');
  let mouseX = evt.data.mouseX + pos.left;
  let mouseY = evt.data.mouseY + pos.top;

  if (window.parent === window) {
    // Top frame
    //doAwesomeThings(mouseX, mouseY);
    console.log('--------------------------');
    console.log('here 2');
    console.log('==========================');
  } else {
    // Keep uploading
    window.parent.postMessage({
      msg: 'SALADICT_CLICK',
      mouseX,
      mouseY
    }, '*');
  }
});
*/
