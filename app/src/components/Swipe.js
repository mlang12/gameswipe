import React, { Component } from 'react';
// import { Switch, Route, Router, Link, Redirect, withRouter } from 'react-router-dom';
import Loading from './Loading.js';
import SwipeComp from './SwipeComp.js';
import helpers from '../utils/helpers.js';

class Swipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: null,
      gameDetails: null,
      offset: null,
      remainInCurrentSet: null
    };

    this.updateRemain = this.updateRemain.bind(this);
  }

  componentDidMount(){
    const _this = this;
    helpers.getSwipeContent().then(function(allGamedata) {
      const allGames = allGamedata.data;
      helpers.updateSwipe(allGames.slice(0,10)).then(function(fullDetail) {
        console.log(fullDetail)
        _this.setState({
          gameDetails: fullDetail.data.body,
          games: allGames,
          offset: 10,
          remainInCurrentSet: 10
        });
      });
    }); 
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.remainInCurrentSet <= 2) {
      const allGames = this.state.games;
      const offset = this.state.offset;
      const _this = this;
      helpers.updateSwipe(allGames.slice(offset, offset + 10)).then(function(fullDetail) {
        _this.setState({
          gameDetails: _this.state.gameDetails.concat(fullDetail.data.body),
          offset: offset + 10,
          remainInCurrentSet: _this.remainInCurrentSet + 10
        });
      });
    }
  }

  updateRemain(){
    const _this = this;
    this.setState({
      offset: _this.state.offset - 1
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
          <SwipeComp items={this.state.gameDetails} updateRemain={this.state.remainInCurrentSet} />
        </div>
      );
    }
  }
}

export default Swipe;