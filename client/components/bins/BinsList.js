import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
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
      Bin {bin._id}
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
