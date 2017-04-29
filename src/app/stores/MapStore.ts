import { action, observable } from 'mobx';

export default class MapStore {
  @observable public latitude = 13.108219537824667;
  @observable public longitude = 122.454716796875;

  @action public changePosition(lat: number, lng: number) {
    this.latitude = lat;
    this.longitude = lng;
  }
}
