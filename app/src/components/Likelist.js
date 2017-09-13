import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading.js';

class Likelist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      warn: ""
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    this.props.removeGame(e.target.id);
  }

  render() {
    if(this.props.result !== null || this.props.result !== undefined){
      const p = this.props.result;
      return (
        <div key={p.id} className="likeItem row">
          <Link to={'/gameview/' + p.id} >
            <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-2 likeListImgHolder">
              <img src={p.cover.url} className="likeItemImg"/>
            </div>
            <div className="col-xs-7 col-sm-7 col-md-8 col-lg-8 col-xl-8 likeListContentHolder">
              <h3>{p.name}</h3>
              <p>{p.mini.summary}</p>
              <p className="italic"><span className="genreDetails">Genre: {p.mini.genres}</span><span className="platformDetails">Platform: {p.mini.platform}</span></p>
            </div>
          </Link>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 likeListButtonHolder">
            <button id={p.id} onClick={this.handleClick} className="btn btn-primary removeButton">Remove</button>
          </div>
        </div>
      );
    } else {
      return (
        <Loading />
      )
    }  
  }
}

export default Likelist;
