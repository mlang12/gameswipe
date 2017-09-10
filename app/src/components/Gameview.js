import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import helpers from '../utils/helpers.js';
import Loading from './Loading.js';
import Screenshots from './Screenshots.js';
import moment from 'moment'

class Gametile extends Component {
  constructor(props) {
    super(props);
    
    // const _this = this;
    helpers.getGameDetails(this.props.location.pathname).then(gameInfo => {
      console.log(gameInfo.data.body[0])
      if(gameInfo.data.body !== undefined) {
        this.setState(gameInfo.data.body[0]);
      } else {
        this.setState({errorMsg: "Sorry, there was an issue loading this game =("});
      }
    });
  }

  render() {
    if(this.state !== null && this.state.errorMsg === undefined) {
      return (
        <div className="gameDetailContainer">
          <div className="row gameDetailsHeader">
            <h1 className="gameTileHeader">{this.state.name}</h1>
          </div>
          <div className="row gameDetailsCoverImgHolder">
            <img className="gameDetailsCoverImg"src={this.state.cover.url}/>
          </div>
          <div className="row gameDetailsSummary">
            <h3> Summary: </h3>
            <p>{this.state.summary}</p>
          </div>
          <div className="row gameDetailsDetails">
            <h3> Details: </h3>
            <p>Release Date: {moment(this.state.first_release_date).format("MMM-DD-YYYY")}</p>
            <p>Rating: {this.state.total_rating}/100 </p>
            <p>Genre: {this.state.genres}</p>
            <p>Platform: {this.state.platform}</p>
          </div>
          <div className="row gameDetailsScreenShots">
            <Screenshots imgs={this.state.screenshots}/>
          </div>
        </div>
      );
    } else if (this.state !== null && this.state.errorMsg) {
      return (
        <div>
          <h3> {this.state.errorMsg} </h3>
        </div>
      );
    } else {
      return (
        <div>
          <h3>Loading the game info...</h3>
          <Loading />
        </div>
      );
    }
  }
}

export default Gametile;