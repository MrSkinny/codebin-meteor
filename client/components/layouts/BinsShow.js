import { createContainer } from 'meteor/react-meteor-data';
import React, { Component, PropTypes } from 'react';
import { Bins } from '../../../imports/collections/bins';

const propTypes = {
  params: PropTypes.object.isRequired
};

class BinsShow extends Component {
  render() {
    const { params } = this.props;

    return (
      <div>BinId: {params.binId}</div>
    );
  }
}

BinsShow.propTypes = propTypes;

export default createContainer(() => {
  return {};
}, BinsShow);
