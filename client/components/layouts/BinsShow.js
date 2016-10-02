import React, { Component, PropTypes } from 'react';

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

export default BinsShow;
