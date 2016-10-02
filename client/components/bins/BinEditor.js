import React, { Component, PropTypes } from 'react';

const propTypes = {
  bin: PropTypes.object.isRequired
};

class BinEditor extends Component {
  render() {
    const { bin } = this.props;

    return (
      <div>BinEditor</div>
    );
  }
}

BinEditor.propTypes = propTypes;

export default BinEditor;
