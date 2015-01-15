const Cu = Components.utils;

Cu.import("resource://e10sresources/Module.jsm");

function uninstall() {
  removeMessageListener("e10scode:uninstall", uninstall);
  e10sobserver.uninstall();
}

addMessageListener("e10scode:uninstall", uninstall);
