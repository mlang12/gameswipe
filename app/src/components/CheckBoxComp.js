import React, { Component } from 'react';

class CheckBoxComp extends Component {
  render() {
    return (
      <span className="cbox">
        <label>
          <span>
          <span className="labelSpan">{this.props.label}</span>
          <input
            name={this.props.label}
            type="checkbox"
            id={this.props.keyId}
            className={this.props.type}
            checked={this.props.userChoice}
            onChange={this.props.update} />
            </span>
        </label>
      </span>
    );
  }
}

export default CheckBoxComp;
