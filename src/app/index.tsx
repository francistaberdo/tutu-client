import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { browserHistory, IndexRoute, Route, Router } from 'react-router';
import App from './components/App';
import AppWrapper from './components/AppWrapper';
import Submission from './components/Submission';
import { STORE_MAP, STORE_ROUTER, STORE_TODO } from './constants/stores';
import { TodoModel } from './models/TodoModel';
import MapStore from './stores/MapStore';
import RouterStore from './stores/RouterStore';
import TodoStore from './stores/TodoStore';

// enable MobX strict mode
useStrict(true);

// default fixtures for TodoStore
const defaultTodos = [
  new TodoModel('Use Mobx'),
  new TodoModel('Use React', true),
];

// prepare MobX stores
const todoStore = new TodoStore(defaultTodos);
const mapStore = new MapStore();
const routerStore = new RouterStore(browserHistory);
const rootStores = {
  [STORE_TODO]: todoStore,
  [STORE_MAP]: mapStore,
  [STORE_ROUTER]: routerStore,
};

// render react DOM
ReactDOM.render(
  <Provider {...rootStores} >
    <Router history={browserHistory} >
      <Route path="/" component={AppWrapper} >
        <IndexRoute component={App} />
        <Route path="/submission" component={Submission} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
