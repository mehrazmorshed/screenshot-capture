// When the button is clicked, send a message to the background script
document.getElementById("captureScreenshot").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "captureScreenshot" });
});
