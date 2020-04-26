import {observable} from 'mobx';

export class UiStore {
  @observable min: Number = 0;
  @observable sec: Number = 0;
}

export default new UiStore();
