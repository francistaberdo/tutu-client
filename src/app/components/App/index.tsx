import * as React from 'react';
import { Grid } from 'semantic-ui-react';
import Map from '../Map';
import Sidebar from '../Sidebar';
import * as styles from './styles.css';
import MenuBar from "../MenuBar/index";

interface ILocalState {
  isSidebarOpen: boolean;
}
export default class App extends React.Component<void, Partial<ILocalState>> {
  state = {
    isSidebarOpen: true,
  };

  render() {
    return (
      <Grid columns={2}>
        <Grid.Row className={styles.container}>
          <Grid.Column width={12} className={styles.mapContainer}>
            <MenuBar />
            <Map />
          </Grid.Column>
          <Grid.Column width={4}>
            <Sidebar />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
