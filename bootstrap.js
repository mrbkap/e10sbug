const Cc = Components.classes;
const Ci = Components.interfaces;
const Cu = Components.utils;

Cu.import("resource://gre/modules/Services.jsm");

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

  let resource = Services.io
                         .getProtocolHandler("resource")
                         .QueryInterface(Ci.nsIResProtocolHandler);
  let alias = Services.io.newFileURI(aData.installPath);
  if (!aData.installPath.isDirectory())
    alias = Services.io.newURI("jar:" + alias.spec + "!/resources/", null, null);
  resource.setSubstitution("e10sresources", alias);

  gmm.loadFrameScript(SCRIPT_URL, true);
}

function shutdown(aData, aReason) {
  let gmm =
    Cc["@mozilla.org/globalmessagemanager;1"].
      getService(Ci.nsIMessageListenerManager);

  let resource = Services.io
                         .getProtocolHandler("resource")
                         .QueryInterface(Ci.nsIResProtocolHandler);
  resource.setSubstitution("e10sresources", null);

  gmm.removeDelayedFrameScript(SCRIPT_URL);
}
