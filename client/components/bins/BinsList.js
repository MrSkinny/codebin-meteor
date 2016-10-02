import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router';

import { Bins } from '../../../imports/collections/bins';

const propTypes = {
  bins: PropTypes.array.isRequired
};

class BinsList extends Component {
  onBinRemove(bin) {
    Meteor.call('bins.remove', bin);
  }

  renderBins = () => this.props.bins.map(bin => (
    <li className="list-group-item" key={bin._id}>
      Bin <Link to={`/bins/${bin._id}`}>{bin._id}</Link>
      <span className="pull-right">
        <button
          className="btn btn-danger"
          onClick={() => this.onBinRemove(bin)}
        >
          Remove
        </button>
      </span>
    </li>
  ))

  render() {
    return (
      <ul className="list-group">
        {this.renderBins()}
      </ul>
    );
  }
}

BinsList.propTypes = propTypes;

export default createContainer(() => {
  Meteor.subscribe('bins');

  return { bins: Bins.find({}).fetch() };
}, BinsList);
