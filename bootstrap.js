const Cc = Components.classes;
const Ci = Components.interfaces;

const SCRIPT_URL = "chrome://e10scode/content/e10scode.js";

function install(aData, aReason) {}

function uninstall(aData, aReason) {
  let gmm =
    Cc["@mozilla.org/globalmessagemanager;1"].
      getService(Ci.nsIMessageBroadcaster);

  gmm.broadcastAsyncMessage("e10scode:uninstall", {});
}

function startup(aData, aReason) {
  let gmm =
    Cc["@mozilla.org/globalmessagemanager;1"].
      getService(Ci.nsIMessageListenerManager);

  gmm.loadFrameScript(SCRIPT_URL, true);
}

function shutdown(aData, aReason) {
  let gmm =
  Cc["@mozilla.org/globalmessagemanager;1"].
    getService(Ci.nsIMessageListenerManager);

  gmm.removeDelayedFrameScript(SCRIPT_URL);
}
