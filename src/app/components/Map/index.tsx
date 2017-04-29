import GoogleMapReact from 'google-map-react';
import { fitBounds } from 'google-map-react/utils';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { STORE_MAP } from '../../constants/stores';
import MapStore from '../../stores/MapStore';

const bounds = {
  nw: {
    lat: 50.01038826014866,
    lng: -118.6525866875,
  },
  se: {
    lat: 32.698335045970396,
    lng: -92.0217273125,
  },
};
const size = {
  width: 640, // Map width in pixels
  height: 380, // Map height in pixels
};
console.log(fitBounds(bounds, size));

@inject(STORE_MAP)
@observer
export default class Map extends React.Component<{ mapStore?: MapStore }, void> {
  render() {
    const { mapStore } = this.props;
    console.log(this.props);
    return (
      <GoogleMapReact
        defaultCenter={{ lat: mapStore.latitude, lng: mapStore.longitude }}
        defaultZoom={6}
        bootstrapURLKeys={{
          key: 'AIzaSyBOgu8O3Vhe47FZNa4p1KZzAjBhfmiB-n8',
        }}
        onChange={(a) => {
          console.log(a);
        }}
      />
    );
  }
}
