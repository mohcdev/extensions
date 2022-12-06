

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['content.js']
  });
});

chrome.action.setBadgeBackgroundColor({color: '#ccccff'})
chrome.action.setBadgeText({text:'Res'})
