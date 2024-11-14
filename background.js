chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "captureScreenshot") {
    // Capture the visible area of the current tab
    chrome.tabs.captureVisibleTab(null, { format: "png" }, (screenshotUrl) => {
      if (screenshotUrl) {
        // Trigger download
        chrome.downloads.download({
          url: screenshotUrl,
          filename: `screenshot_${Date.now()}.png`
        });
      } else {
        console.error("Failed to capture screenshot.");
      }
    });
  }
});
