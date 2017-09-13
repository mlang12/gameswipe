import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import querystring from 'querystring';
import ReactSwipe from 'react-swipe';
import Gametile from './Gametile.js';
import helpers from '../utils/helpers.js'

const query = querystring.parse(window.location.search.slice(1));
console.log("query", query);
// generate slide panes
// const numberOfSlides = parseInt(query.slidesNum, 10) || 20;
const numberOfSlides = 30;
const paneNodes = Array.apply(null, Array(numberOfSlides)).map((_, i) => {
  return (
    <div key={i}>
      <div className="item">{i}</div>
    </div>
  );
});

// change Swipe.js options by query params
// const startSlide = parseInt(query.startSlide, 10) || 1;
const startSlide = 1;
const swipeOptions = {
  startSlide: startSlide,
  auto: 0,
  speed: parseInt(query.speed, 10) || 300,
  disableScroll: query.disableScroll === 'true',
  continuous: 'true',
  callback() {
    console.log('slide changed');
  },
  transitionEnd() {
    console.log('ended transition');
  }
};

class SwipeComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      games: [],
    };
  }

  componentDidMount(){
    this.setState({
      current: 0,
      games: this.props.games
    })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps.items)
    console.log(this.props.items)
    if (prevProps.items !== this.props.items) {
      this.setState({
        games: this.props.items
      })
    }
  }

  next() {
    let cur = this.state.current;
    this.refs.reactSwipe.next();
    helpers.addToLike(this.state.games[cur].id);
    // this.props.updateRemain();
    this.setState({
      current: this.state.current + 1
    })
  }

  prev() {
    let cur = this.state.current;
    this.refs.reactSwipe.prev();
    // helpers.addToDislike(this.state.games[cur]);
    // this.props.updateRemain();
    this.setState({
      current: this.state.current + 1
    })
  }

  render() {
    if (this.state.games !== undefined && this.state.games.length > 0) {
      let cur = this.state.current;
      console.log('Here')
      return (
        <div className="center">
          <ReactSwipe ref="reactSwipe" className="mySwipe" swipeOptions={swipeOptions}>
              <div><Gametile key={this.state.games[cur + 1].id} result={this.state.games[cur + 1]}/></div>
              <div><Gametile key={this.state.games[cur].id} result={this.state.games[cur]}/></div>
              <div><Gametile key={this.state.games[cur + 1].id} result={this.state.games[cur + 1]}/></div>
          </ReactSwipe>
          <div>
            <button type="button" className="btn swipeButton" onClick={this.prev.bind(this)}>Dislike</button>
            <button type="button" className="btn swipeButton" onClick={this.next.bind(this)}>Like</button>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          waiting...
        </div>
      );
    }
  }
}

export default SwipeComp;