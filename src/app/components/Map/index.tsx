import GoogleMapReact from 'google-map-react';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { STORE_MAP } from '../../constants/stores';
import MapStore from '../../stores/MapStore';
import ArticleMarker from '../Markers/ArticleMarker';

const mapStyles = [{ 'featureType': 'landscape', 'stylers': [{ 'hue': '#F1FF00' }, { 'saturation': -27.4 }, { 'lightness': 9.4 }, { 'gamma': 1 }] }, { 'featureType': 'road.highway', 'stylers': [{ 'hue': '#0099FF' }, { 'saturation': -20 }, { 'lightness': 36.4 }, { 'gamma': 1 }] }, { 'featureType': 'road.arterial', 'stylers': [{ 'hue': '#00FF4F' }, { 'saturation': 0 }, { 'lightness': 0 }, { 'gamma': 1 }] }, { 'featureType': 'road.local', 'stylers': [{ 'hue': '#FFB300' }, { 'saturation': -38 }, { 'lightness': 11.2 }, { 'gamma': 1 }] }, { 'featureType': 'water', 'stylers': [{ 'hue': '#00B6FF' }, { 'saturation': 4.2 }, { 'lightness': -63.4 }, { 'gamma': 1 }] }, { 'featureType': 'poi', 'stylers': [{ 'hue': '#9FFF00' }, { 'saturation': 0 }, { 'lightness': 0 }, { 'gamma': 1 }] }];

const Center = ({ lng, lat }) => (
  <div style={{ width: '30px', height: '30px', backgroundColor: 'green', borderRadius: '50px' }} />
);

@inject(STORE_MAP)
@observer
export default class Map extends React.Component<{ mapStore?: MapStore }, void> {
  defaultCenter = {
    lng: 120.87461673736573,
    lat: 14.64313727811323,
  };
  render() {
    const { mapStore } = this.props;

    return (
      <GoogleMapReact
        defaultZoom={9}
        defaultCenter={this.defaultCenter}
        bootstrapURLKeys={{
          key: 'AIzaSyBOgu8O3Vhe47FZNa4p1KZzAjBhfmiB-n8',
        }}
        options={{
          minZoom: 8,
          maxZoom: 13,
          styles: mapStyles,
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
              <ArticleMarker
                lng={lng}
                lat={lat}
                source={article.domain}
                sourceUrl={article.url}
                document={article.doc}
              />
            );
          });
        })}
      </GoogleMapReact>
    );
  }
}
