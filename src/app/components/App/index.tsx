import * as React from 'react';
import Map from '../Map';

export default class App extends React.Component<void, void> {
  render() {
    return (
      <div style={{ width: '100vw', height: '100vh' }}>
        <Map />
      </div>
    );
  }
}
