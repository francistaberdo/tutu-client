import * as React from 'react';
import { Input } from 'semantic-ui-react';

interface ILocalState {
  sourceUrl: string;
  error: string;
}

export default class Submission extends React.Component<void, ILocalState> {
  render() {
    return (
      <div>
        <form>
          <Input
            placeholder="Source URL"
            onChange={(e: React.FormEvent<HTMLInputElement>) => this.setState({ sourceUrl: e.currentTarget.value })}
          />
        </form>
      </div>
    );
  }
}
