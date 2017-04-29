import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as React from 'react';
import './style.css';

export default class AppLayout extends React.Component<any, any> {

  renderDevTool() {
    if (process.env.NODE_ENV !== 'production') {
      // tslint:disable-next-line:no-require-imports
      const DevTools = require('mobx-react-devtools').default;
      return (<DevTools />);
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          {this.props.children}
          {this.renderDevTool()}
        </div>
      </MuiThemeProvider>
    );
  }
}
