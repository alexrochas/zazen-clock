import uiStore from "./store";
import {action} from 'mobx';

export class Action {

  @action
  async startClock(time: Number) {
    uiStore.min = time;
  }
}

export default new Action()
