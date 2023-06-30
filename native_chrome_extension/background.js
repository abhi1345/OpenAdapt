// Native Messaging port
let port = null;
const hostName = 'openadapt';


// Handle received messages from content.js
function onReceived(response) {
  console.log(response);
}



// Message listener for content script
function messageListener(message, sender, sendResponse) {
  console.log({ message, sender, sendResponse });
  port.postMessage(message);
}

port = chrome.runtime.connectNative(hostName);
port.onMessage.addListener(onReceived);
chrome.runtime.onMessage.addListener(messageListener); // Listen for messages from content scripts