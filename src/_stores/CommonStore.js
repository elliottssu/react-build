/**
 * 演示store
 */

import { action, observable } from 'mobx';

class CommonStore {
  @observable paramsList = {}

  @action setParams(params) {
    this.paramsList = params;
  }

  @action getParams() {
    return this.paramsList;
  }
}

export default new CommonStore();
