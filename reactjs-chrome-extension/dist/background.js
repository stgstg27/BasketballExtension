chrome.runtime.onMessage.addListener(((e,o,t)=>{console.log(e),console.log(o),t("Front the background Script")})),chrome.action.onClicked.addListener((e=>{chrome.scripting.executeScript({target:{tabId:e.id},files:["content.js"]})}));