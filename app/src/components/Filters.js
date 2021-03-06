import React, { Component } from 'react';
import seeds from '../seeds.json';
import CheckBoxComp from './CheckBoxComp.js';
import helpers from '../utils/helpers.js';
import Loading from './Loading.js';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      profile: null,
      warn: ""
    }

    helpers.getUserInfo().then(userData => {
      console.log(userData);
      this.setState({
        user: userData.data[0],
        profile: userData.data[0].profile
      });
    });

    this.saveFilters = this.saveFilters.bind(this);
    this.updateSelection = this.updateSelection.bind(this);
  }

  saveFilters() {
    helpers.setFilters(this.state.profile).then(response => {
      if (response.data === "OK") {
      this.setState({
        warn: "Filters Saved, Success!",
        warnColor: "goodWarn"
      });
      } else {
        this.setState({
          warn: "Something went wrong saving...",
          warnColor: "badWarn"
        });
      }
    });
  }

  updateSelection(e) {
    const prof = this.state.profile;
    const type = e.target.className;
    const id = Number(e.target.id);
    const index = prof[type].indexOf(id);
    index >= 0 ? prof[type].splice(index, 1) : prof[type].push(id);
    this.setState({
      profile: prof,
      warnColor: ""
    });
  }

  userChoice(id, type) {
    return this.state.profile[type].indexOf(id) >= 0;
  }

  render() {
    if(this.state.profile !== null){
      const _this = this;
      return (
        <div className="filtersArea">
          <h2> Edit Filters </h2>

          <div className="filterHolder row">
            <h3> Genres </h3>
            {Object.keys(seeds.genreRefNameToNum).map(genre => {
              return (
                <span key={seeds.genreRefNameToNum[genre]} className="cboxHolder">
                  <CheckBoxComp 
                    type={'genres'}
                    keyId={seeds.genreRefNameToNum[genre]} 
                    userChoice={this.userChoice(seeds.genreRefNameToNum[genre], "genres")} 
                    label={genre} 
                    update={_this.updateSelection}/>
                </span>
              );
            })}
          </div>

          <div className="filterHolder row">
            <h3> Platforms </h3>
              {Object.keys(seeds.platRefNameToNum).map(platform => {
                return (
                  <span className="cboxHolder" key={seeds.platRefNameToNum[platform]}>
                    <CheckBoxComp 
                      type={'systems'} 
                      keyId={seeds.platRefNameToNum[platform]} 
                      userChoice={this.userChoice(seeds.platRefNameToNum[platform], "systems")} 
                      label={platform} 
                      update={_this.updateSelection}/>
                  </span>
                );
              })}
          </div>
          <div className="row">
            <button className="btn likeButton" onClick={this.saveFilters}>Save Filters</button>
            <p className={this.state.warnColor + " inputWarn"}>{this.state.warn}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <Loading />
        </div>
      );
    }
  }
}

export default Filters;
