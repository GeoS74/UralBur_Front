import { loader, shower } from "../libs/common.js";

class Connector {
  components = new Map();

  add(name) {
    console.log('add '+name)
    this.components.set(name, 1);
  }

  del(name){
    console.log('del '+name)
    this.components.delete(name);

    if(!this.components.size) {
      this.start();
    }
  }

  start() {
    console.log('все компоненты загружены')
    loader(jQuery);
    shower(jQuery);
  }
}

const connector = new Connector();
export default connector;