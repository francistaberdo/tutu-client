import GoogleMapReact from 'google-map-react';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { STORE_MAP } from '../../constants/stores';
import MapStore from '../../stores/MapStore';

const Article = ({ lng, lat, title }) => (
  <div style={{ width: '30px', height: '30px', backgroundColor: 'red', borderRadius: '50px' }}>
    <p style={{ position: 'absolute' }}>{title}</p>
  </div>
);
const Center = ({ lng, lat }) => (
  <div style={{ width: '30px', height: '30px', backgroundColor: 'green', borderRadius: '50px' }} />
);

@inject(STORE_MAP)
@observer
export default class Map extends React.Component<{ mapStore?: MapStore, defaultCenter }, void> {
  static defaultProps = {
    defaultCenter: {
      lng: 120.87461673736573,
      lat: 14.64313727811323,
    },
  };
  render() {
    const { mapStore } = this.props;

    return (
      <GoogleMapReact
        defaultZoom={9}
        defaultCenter={this.props.defaultCenter}
        bootstrapURLKeys={{
          key: 'AIzaSyBOgu8O3Vhe47FZNa4p1KZzAjBhfmiB-n8',
        }}
        onChange={mapStore.changePosition}
      >
        <Center
          lng={mapStore.center.lng}
          lat={mapStore.center.lat}
        />
        {mapStore.articles.map((article) => {
          return article && article.doc.locations.map(({ position }) => {
            const [lng, lat] = position.coordinates;
            return (
              <Article
                lng={lng}
                lat={lat}
                title={article.doc.title}
              />
            );
          });
        })}
      </GoogleMapReact>
    );
  }
}
