const Ci = Components.interfaces;
const Cc = Components.classes;
const Cu = Components.utils;

function uninstall() {
  removeMessageListener("e10scode:uninstall", uninstall);
}

addMessageListener("e10scode:uninstall", uninstall);

Cu.import("resource://e10sresources/Module.jsm");
