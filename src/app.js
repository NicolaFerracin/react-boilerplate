import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import * as reducers from './reducers';
import Home from './Components/Home/home';

const reducer = combineReducers({
  ...reducers,
  'routing': routerReducer
});

const store = createStore(
  reducer
);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={Home}/>
      </Router>
    </div>
  </Provider>,
  document.getElementById('root')
);
