import React, { Component } from 'react';
import Loading from './Loading.js';
import helpers from '../utils/helpers.js';
import Likelist from './Likelist.js';
import { Link } from 'react-router-dom';

class Liked extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      like: null
    }

    const _this = this;
    helpers.getUserInfo().then(data =>{
      console.log('onload of user data',data.data[0])
      const usr = data.data[0] === [] ? null : data.data[0];
      _this.setState({
        user: usr
      });
    });


    helpers.getAllLiked().then(likeData => {
      console.log('onload of liked data:', likeData)
      if(likeData.data.body !== undefined) {
        _this.setState({
          like: likeData.data.body
        });
      } else if(likeData.data === []) {
        _this.setState({
          like: []
        });
      } else {
        _this.setState({
          like: []
        }); 
      }
    });
  
    this.removeGame = this.removeGame.bind(this);
  }


  removeGame(id) {
    const newLike = this.state.user.like;
    const cleanUser = this.state.user
    const newLikeObj = this.state.like
    const numId = Number(id);
    const index = newLike.indexOf(numId);
    newLike.splice(index, 1);
    newLikeObj.splice(index, 1);
    cleanUser.like = newLike;

    helpers.replaceLikes(newLike);
    this.setState({
      user: cleanUser,
      like: newLikeObj
    });
  }


  render() {
    if (this.state.user === null || this.state.like == null){
      return (
        <div>
          <Loading/>
        </div>
      );
    } else if(this.state.like === [] && this.state.user !== null) {
      <div>
        <h1>Welcome {this.state.user.username}!</h1>
        <h2> You currently have no likes.. try <Link className="swipeLink" to="/swipe">swiping!</Link> </h2>
      </div>
    } else {
      const _this = this;
      console.log('::::::::::::',this.state)
      return (
        <div className="">
          <h1>Welcome {this.state.user.username}!</h1>
          <h2>Below are the games you have liked...</h2>
          {this.state.like.map(result => {
            return (
              <div key={result.id}>
                <Likelist removeGame={_this.removeGame} result={result} />
              </div>
            );
          })}
        </div>
      );
    }
  }
}

export default Liked;
