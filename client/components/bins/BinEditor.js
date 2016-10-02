import React, { Component, PropTypes } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/markdown/markdown';

const propTypes = {
  bin: PropTypes.object.isRequired
};

class BinEditor extends Component {
  onEditorChange = content => {
    Meteor.call('bins.update', this.props.bin, content);
  }

  render() {
    const { bin } = this.props;

    return (
      <div className="col-xs-8">
        <h5>Input</h5>
        <CodeMirror
          onChange={this.onEditorChange}
          options={{ mode: 'markdown', lineNumbers: true }}
          value={this.props.bin.content}
        />
      </div>
    );
  }
}

BinEditor.propTypes = propTypes;

export default BinEditor;
