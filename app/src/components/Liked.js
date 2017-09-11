import React, { Component } from 'react';
import Loading from './Loading.js';
import helpers from '../utils/helpers.js';
import LandingTiles from './LandingTiles.js';
import { Link } from 'react-router-dom';

const Userliked = (usersLiked) => {
  if (usersLiked.length > 0) {
    return (<LandingTiles results={usersLiked} />);
  } else {
    return (
      <div>
        <h2> You currently have no likes.. try <Link to="/swipe">swiping!</Link> </h2>
      </div>
    )
  }
}

class Liked extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }

    const _this = this;
    helpers.getUserInfo().then(data =>{
      console.log('lllllllllll',data);
      _this.setState({
        user: data.data[0]
      });
    });
  }

  render() {
    if (this.state.user === null){
      return <Loading/>
    } else {
      return (
        <div className="">
          <h1>Welcome {this.state.user.username}!</h1>
          <Userliked results={this.state.user.like} />
        </div>
      );
    }
  }
}

export default Liked;
