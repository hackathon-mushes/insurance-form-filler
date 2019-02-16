chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
  });
});

chrome.browserAction.onClicked.addListener(function () {
    console.log("Hello mundão")
    alert('Hi')
    // chrome.tabs.create({ url: chrome.runtime.getURL("index.html") });
});
