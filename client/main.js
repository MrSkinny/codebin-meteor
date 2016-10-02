import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import BinsIndex from './components/layouts/BinsIndex';
import BinsShow from './components/layouts/BinsShow';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={BinsIndex} />
      <Route path="bins/:binId" component={BinsShow} />
      <Route path="bins" component={BinsIndex} />
    </Route>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('root'))
});
