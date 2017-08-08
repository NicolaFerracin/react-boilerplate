import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import Main from './Routes/Main/Main';

const Routes = () =>
  (<Router>
    <div>
      <Route exact path="/" component={ Main } />
    </div>
  </Router>);

ReactDOM.render(<Routes />, document.getElementById('root'));
