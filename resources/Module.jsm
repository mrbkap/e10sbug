const Ci = Components.interfaces;
const Cu = Components.utils;

Cu.import("resource://gre/modules/Services.jsm");

let observer = {
  observe(subject, topic, data) {
    dump(`Here, observing ${topic}!`);
  }
};

Services.obs.addObserver(observer, "cycle-collector-end", false);
