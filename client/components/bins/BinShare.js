import React, { Component } from 'react';

class BinShare extends Component {
  onShareClick = () => {
    const email = this._emailInput.value;

    Meteor.call('bins.share', this.props.bin, email);
  }

  renderShareList = () => {
    return this.props.bin.sharedWith.map(email => {
      return (
        <button
          key={email}
          className="btn btn-default"
        >
          {email}
        </button>
      );
    });
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
        <div>
          Shared With:
        </div>
        <div className="btn-group">
          {this.renderShareList()}
        </div>
      </footer>
    );
  }
}

export default BinShare;
