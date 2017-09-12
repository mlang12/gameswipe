import React, { Component } from 'react';
// import { Switch, Route, Router, Link, Redirect, withRouter } from 'react-router-dom';
import Loading from './Loading.js';
import SwipeComp from './SwipeComp.js';
import helpers from '../utils/helpers.js';

class Swipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: null
    };
  }

  componentDidMount(){
    const _this = this;
    helpers.getSwipeContent().then(function(data) {
      console.log('onmount: ',data);
      // _this.setState({
      //   games: data.data.body
      // });
    }); 
  }

  render() {
    if(this.state && this.state.games === null) {
      return (
        <div className="row">
          <h2> Please wait while new games populate... </h2>
          <Loading />
        </div>
      );
    } else {
      return (
        <div className="row swipeHolder">
          <SwipeComp items={this.state.games} />
        </div>
      );
    }
  }
}

export default Swipe;