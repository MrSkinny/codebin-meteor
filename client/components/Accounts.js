// General approach to use 3rd-party libs: Render in componentDidMount,
// then clean up in componentWillUnmount
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Accounts extends Component {
  componentDidMount() {
    // Render Blaze accounts form, then find div we just rendered and
    // place Blaze form in the div
    this._view = Blaze.render(
      Template.loginButtons,
      this._containerRef
    );
  }

  componentWillUnmount() {
    // Go find the Blaze forms we created and destroy them manually
    Blaze.remove(this._view);
  }

  render() {
    return (
      <div ref={ref => this._containerRef = ref}>
      </div>
    );
  }
}

export default Accounts;
