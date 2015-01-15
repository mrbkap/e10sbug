this.EXPORTED_SYMBOLS = [ "e10sobserver" ];

const Ci = Components.interfaces;
const Cu = Components.utils;

Cu.import("resource://gre/modules/Services.jsm");
Cu.import("resource://gre/modules/devtools/Console.jsm");

let observer = {
  observe(subject, topic, data) {
    console.log(`Observed ${topic} in the child process`);
  }
};

Services.obs.addObserver(observer, "cycle-collector-end", false);

var e10sobserver = {
  uninstall() {
    Services.obs.removeObserver(observer, "cycle-collector-end");
  }
};
