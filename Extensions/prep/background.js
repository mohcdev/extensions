

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['content.js']
  });
});

chrome.action.setBadgeBackgroundColor({color: 'cyan'})
chrome.action.setBadgeText({text:'Prep'})
