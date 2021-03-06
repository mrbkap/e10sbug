const Cc = Components.classes;
const Ci = Components.interfaces;

const SCRIPT_URL = "chrome://bug687194/content/e10sbug.js";

function install(aData, aReason) {}

function uninstall(aData, aReason) {
  let gmm =
    Cc["@mozilla.org/globalmessagemanager;1"].
      getService(Ci.nsIMessageBroadcaster);

  gmm.broadcastAsyncMessage("e10sbug:uninstall", {});
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
