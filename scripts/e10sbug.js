function loadHandler(aEvent) {
  let doc = aEvent.originalTarget;

  if ((null != doc) && (null != doc.location) &&
      (null != doc.location.hostname) &&
      /mozilla\.(org|com)/.test(doc.location.hostname)) {
    content.document.documentElement.setAttribute("style", "display: none !important");
  }
}

function uninstall() {
  removeEventListener("load", loadHandler, true);
  removeMessageListener("e10sbug:uninstall", uninstall);
}

addEventListener("load", loadHandler, true);
addMessageListener("e10sbug:uninstall", uninstall);
