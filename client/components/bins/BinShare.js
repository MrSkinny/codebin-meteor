import React, { Component } from 'react';

class BinShare extends Component {
  onShareClick = () => {
    const email = this._emailInput.value;

    Meteor.call('bins.share', this.props.bin, email);
  }

  render() {
    return (
      <footer className="BinShare">
        <div className="input-group">
          <input ref={ref => this._emailInput = ref} className="form-control" />
          <div className="input-group-btn">
            <button onClick={this.onShareClick} className="btn btn-default">
              Share Bin
            </button>
          </div>
        </div>
      </footer>
    );
  }
}

export default BinShare;
