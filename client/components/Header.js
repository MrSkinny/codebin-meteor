import React, { Component } from 'react';
import Accounts from './Accounts';

class Header extends Component {
  onBinClick = (e) => {
    e.preventDefault();

    Meteor.call('bins.insert');
  }

  render() {
    return (
      <nav className="Header nav navbar-default">
        <div className="navbar-header">
          <a className="navbar-brand">CodeBin</a>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Accounts />
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