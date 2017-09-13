import React, { Component } from 'react';

class CheckBoxComp extends Component {
  render() {
    return (
      <span className="cbox">
        <label>
          {this.props.label}
          <input
            name={this.props.label}
            type="checkbox"
            id={this.props.keyId}
            className={this.props.type}
            checked={this.props.userChoice}
            onChange={this.props.update} />
        </label>
      </span>
    );
  }
}

export default CheckBoxComp;
