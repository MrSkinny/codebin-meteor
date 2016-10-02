import React from 'react';

import Header from './Header';

const App = props => (
  <div className="App">
    <Header />
    {props.children}
  </div>
);

export default App;
