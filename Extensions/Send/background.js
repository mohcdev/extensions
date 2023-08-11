

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['content.js']
  });
});

chrome.action.setBadgeBackgroundColor({color: 'crimson'})
chrome.action.setBadgeText({text:'Send'})
