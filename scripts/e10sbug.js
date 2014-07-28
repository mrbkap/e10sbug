function uninstall() {
  removeMessageListener("e10sbug:uninstall", uninstall);
}

addMessageListener("e10sbug:uninstall", uninstall);
