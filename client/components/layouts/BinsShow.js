import { createContainer } from 'meteor/react-meteor-data';
import React, { Component, PropTypes } from 'react';

import BinEditor from '../bins/BinEditor';

import { Bins } from '../../../imports/collections/bins';

const propTypes = {
  bin: PropTypes.object
};

class BinsShow extends Component {
  render() {
    const { bin } = this.props;
    if (!bin) return <div>Fetching bin...</div>;

    return (
      <div>
        <h3>Bin: {bin._id}</h3>
        <BinEditor bin={bin} />
      </div>
    );
  }
}

BinsShow.propTypes = propTypes;

export default createContainer(props => {
  Meteor.subscribe('bins');

  return { bin: Bins.findOne({ _id: props.params.binId }) };
}, BinsShow);
