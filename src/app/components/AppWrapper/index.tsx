import * as React from 'react';

export default class AppWrapper extends React.Component<any, any> {
  renderDevTool() {
    if (process.env.NODE_ENV !== 'production') {
      // tslint:disable-next-line:no-require-imports
      const DevTools = require('mobx-react-devtools').default;
      return (<DevTools />);
    }
  }

  render() {
    return (
      <div>
        {this.props.children}
        {this.renderDevTool()}
      </div>
    );
  }
}
