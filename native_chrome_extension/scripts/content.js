function onReceived(response) {
    console.log(response);
}

// runtime.connectNative
var port = chrome.runtime.connectNative("openadapt");
port.onMessage.addListener(onReceived);
port.postMessage("hello");

// runtime.sendNativeMessage
browser.runtime.sendNativeMessage("openadapt", "hello").then(onReceived);