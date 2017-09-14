import React, { Component } from 'react';
import helpers from '../utils/helpers.js';
import { Redirect, Route } from 'react-router-dom';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      terms: "",
      searched: false
    }
    this.changeHandle = this.changeHandle.bind(this);
    this.search = this.search.bind(this);
  }

  changeHandle(e) {
    e.preventDefault();
    this.setState({
      terms: e.target.value
    });
  }

  search(e) {
    e.preventDefault();
    const _this = this;
    if (this.state.terms.trim().length > 0) {
      helpers.getSearch(this.state.terms).then(searchResults => {
        _this.props.setDisplay(searchResults.data.body);
        this.setState({
          searched: true
        })
      });
    }
  }

  render() {
    if (this.state.searched === true){
      this.setState({
        searched: false
      });
      return (
        <Redirect to="/"/>
      );
    } else {
      return (
        <span className="">
          <h1 className={this.props.cn + " searchBar"}>
            <form className="input-group" onSubmit={this.search}>
              <input type="text" value={this.state.terms} onChange={this.changeHandle} className="form-control searchParts" placeholder="Search for..."/>
              <span className="input-group-btn">
                <button className="btn likeButton goButton" onSubmit={this.search} type="submit">Go!</button>
              </span>
            </form>
          </h1>
        </span>
      );
    }
  }
}

export default Search;
