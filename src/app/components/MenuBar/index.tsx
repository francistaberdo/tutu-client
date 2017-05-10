import * as React from 'react';
import { Input, Menu } from 'semantic-ui-react';

export default class MenuBar extends React.Component<{}, {}> {
  render() {
    return (
      <Menu>
        <Menu.Item>
          Submission
        </Menu.Item>

        <Menu.Item position="right">
          <Input className="icon" icon="search" placeholder="Search..." />
        </Menu.Item>
      </Menu>
    );
  }
}
