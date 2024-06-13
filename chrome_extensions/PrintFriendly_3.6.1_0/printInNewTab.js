document.addEventListener('DOMContentLoaded', async function() {
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  const id = params.get('id');
  const storage = await chrome.storage.local.get();
  const page = JSON.parse(storage[id]);

  document.title = page.title;
  document.getElementById("new-tab-content").innerHTML = page.html;
  try {
    await chrome.storage.local.remove(id);
  } catch {}

  setTimeout(function() {
    window.print();
    setTimeout(function() {
      window.close();
    }, 100);
  }, 100);
});
