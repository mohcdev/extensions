// const btnConsole = document.querySelector('#console')
	
// btnConsole.onclick = ()=>{
// 	Array.from(document.querySelectorAll("div[data-header-feature='0']>div> a"), item => console.log(item))
		 
// }


chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['content.js']
  });
});

chrome.action.setBadgeBackgroundColor({color: '#80ff80'})
chrome.action.setBadgeText({text:'.ip.'}) 
