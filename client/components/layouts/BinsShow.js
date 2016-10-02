import { createContainer } from 'meteor/react-meteor-data';
import React, { Component, PropTypes } from 'react';

import { Bins } from '../../../imports/collections/bins';

const propTypes = {
  bin: PropTypes.object.isRequired
};

class BinsShow extends Component {
  render() {
    const { bin } = this.props;
    if (!bin) return <div>Fetching bin...</div>;

    return (
      <div>Bin: {bin._id}</div>
    );
  }
}

BinsShow.propTypes = propTypes;

export default createContainer(props => {
  Meteor.subscribe('bins');

  return { bin: Bins.findOne({ _id: props.params.binId }) };
}, BinsShow);
