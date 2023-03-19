const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  // --- ❄️ added code ⤵️ ---
  // Prevent the mini-infobar from appearing on mobile
  event.preventDefault();
  // Stash the event so it can be triggered later.
  window.deferredPrompt = event;
  // Update UI notify the user they can install the PWA
  butInstall.hidden = false;
  // --- ❄️ added code ⤴️ ---
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  // --- ❄️ added code ⤵️ ---
  // Hide the app provided install promotion
  butInstall.hidden = true;
  // Show the install prompt
  window.deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  const { outcome } = await window.deferredPrompt.userChoice;
  // Optionally, send analytics event with outcome of user choice
  console.log(`User response to the install prompt: ${outcome}`);
  // We've used the prompt, and can't use it again, throw it away
  window.deferredPrompt = null;
  // --- ❄️ added code ⤴️ ---
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  // Log install to analytics
  console.log("INSTALL: Success");
  // --- ❄️ added code ⤴️ ---
});
