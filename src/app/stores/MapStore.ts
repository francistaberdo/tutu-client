import axios from 'axios';
import { action, observable, runInAction } from 'mobx';

export default class MapStore {
  @observable latitude = 15.068294431378291;
  @observable longitude = 120.64643585205079;
  @observable articles = [];
  @observable center = {
    lng: 0,
    lat: 0,
  };

  @action
  changePosition = async ({ center: { lng, lat }, zoom }) => {
    const maxDist = zoom >= 13 ? (900 / zoom) / 8 : 900 / zoom;
    const res = await axios.get('http://localhost:3000/api/articles', {
      params: {
        lng,
        lat,
        maxDist,
      },
    });
    console.log(zoom);
    console.log(maxDist);
    console.log(res.data);
    runInAction(() => {
      this.articles = res.data;
      this.center = {
        lng,
        lat,
      };
    });
  }
}
