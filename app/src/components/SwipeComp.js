import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import querystring from 'querystring';
import ReactSwipe from 'react-swipe';
import Gametile from './Gametile.js';
import helpers from '../utils/helpers.js'

const query = querystring.parse(window.location.search.slice(1));
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
const startSlide = 0;
const swipeOptions = {
  startSlide: startSlide,
  auto: 0,
  speed: parseInt(query.speed, 10) || 300,
  disableScroll: query.disableScroll === 'true',
  continuous: true,
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
      current: 2,
      index: [0,1,2],
      currentIndex: 0,
      games: [],
    };
  }

  componentDidMount(){
    this.setState({
      games: this.props.games
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.items !== this.props.items){
      this.setState({
        games: this.props.items
      })
    } else if(prevState.current !== this.state.current) {
      this.props.updateRemain();
    }
  }

  next() {
    let cur = this.state.current;
    let curIndex = this.state.currentIndex;
    let indexArr = this.state.index;
    
    helpers.addToLike(this.state.games[indexArr[curIndex]].id);
    indexArr[curIndex] = cur + 1;
    curIndex === 2 ? curIndex = 0 : curIndex += 1;

    this.refs.reactSwipe.next();
    this.setState({
      current: cur + 1,
      currentIndex: curIndex,
      index: indexArr
    })
  }

  prev() {
    let cur = this.state.current;
    let curIndex = this.state.currentIndex;
    let indexArr = this.state.index;
    
    helpers.addToDisLike(this.state.games[indexArr[curIndex]].id);
    indexArr[curIndex] = cur + 1;
    curIndex === 0 ? curIndex = 2 : curIndex -= 1;

    this.refs.reactSwipe.prev();
    this.setState({
      current: cur + 1,
      currentIndex: curIndex,
      index: indexArr
    })
  }

  render() {
    if (this.state.games !== undefined && this.state.games.length > 0) {
      let index = this.state.index;
      let games = this.state.games;

      return (
        <div className="center">
          <ReactSwipe ref="reactSwipe" className="mySwipe" swipeOptions={swipeOptions}>
              <div><Gametile key={games[index[0]].id} result={games[index[0]]}/></div>
              <div><Gametile key={games[index[1]].id} result={games[index[1]]}/></div>
              <div><Gametile key={games[index[2]].id} result={games[index[2]]}/></div>
          </ReactSwipe>
          <div>
            <button type="button" className="btn swipeButton disLikeButton" onClick={this.prev.bind(this)}>Dislike</button>
            <button type="button" className="btn swipeButton likeButton" onClick={this.next.bind(this)}>Like</button>
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