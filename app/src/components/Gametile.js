import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Gametile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // var picBackground = {
    //   backgroundImage: 'url(' + this.props.result.cover.url + ')'
    // }

    return (
      <div className="gameTile">
        <img className="gameTileImg" src={this.props.result.cover.url} />
        <div className="gameTileInfo">
          <Link className="gameTileLink" to={'/gameview/' + this.props.result.id}>
            <h3 className="gameTileHeader">{this.props.result.name}</h3>
            <p className="miniText">{this.props.result.mini.summary}</p>
            <p className="miniText"><span className="genreDetails">Genre: {this.props.result.mini.genres}</span> <span className="platformDetails">Platform: {this.props.result.mini.platform}</span></p>
          </Link>
        </div>
      </div>
    );
  }
}

export default Gametile;