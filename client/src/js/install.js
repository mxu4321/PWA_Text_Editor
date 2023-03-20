const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  // --- ❄️ added code ⤵️ ---
  event.preventDefault();
  window.deferredPrompt = event;
  butInstall.classList.toggle("hidden", false);
  // --- ❄️ added code ⤴️ ---
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  // --- ❄️ added code ⤵️ ---
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }
  promptEvent.prompt();
  window.deferredPrompt = null;
  butInstall.classList.toggle("hidden", true);
  // --- ❄️ added code ⤴️ ---
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  // --- ❄️ added code ⤵️ ---
    console.log("appinstalled", event);
    window.deferredPrompt = null;
  // --- ❄️ added code ⤴️ ---
});
