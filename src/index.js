import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import { routerReducer } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import Main from './Routes/Main/Main';
import count from './reducers/count';
import * as reducers from './reducers';

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    reducers,
    'routing': routerReducer
  })
);

console.log(store.getState())
console.log(reducers)
console.log(count)

// Create an enhanced history that syncs navigation events with the store
const history = createHistory();

// const history = syncHistoryWithStore(browserHistory, store);

const Routes = () =>
  (<Provider store={store}>
    <Router history={history}>
      <div>
        <Route exact path="/" component={Main} />
      </div>
    </Router>
  </Provider>);

ReactDOM.render(<Routes />, document.getElementById('root'));
