import { RaisedButton, TextField } from 'material-ui';
import * as React from 'react';

interface ILocalState {
  sourceUrl: string;
  error: string;
}

export default class Submission extends React.Component<void, ILocalState> {
  render() {
    return (
      <div>
        <form>
          <TextField
            floatingLabelText="Source URL"
            onChange={(e: React.FormEvent<HTMLInputElement>) => this.setState({ sourceUrl: e.currentTarget.value })}
          />
          <RaisedButton
            label="Submit"
            primary
          />
        </form>
      </div>
    );
  }
}
