import React, { Component } from 'react';
import Accounts from './Accounts';

import { Link } from 'react-router';

class Header extends Component {
  onBinClick = (e) => {
    e.preventDefault();

    Meteor.call('bins.insert');
  }

  render() {
    return (
      <nav className="Header nav navbar-default">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">CodeBin</Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Accounts />
          </li>
          <li>
            <Link to="/bins">All Bins</Link>
          </li>
          <li>
            <a href="#" onClick={this.onBinClick}>Create Bin</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;