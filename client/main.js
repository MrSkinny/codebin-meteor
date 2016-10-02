import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import { Bins } from '../imports/collections/bins';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('root'))
});
