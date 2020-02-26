import React, { Component } from "react";
import axios from "axios";
import Suggestions from "./Suggestions";

const API_KEY = "c2e9fda";
const API_URL = "http://www.omdbapi.com/?apikey=" + API_KEY + "&s=";
const API_URL_MORE = "http://www.omdbapi.com/?apikey=" + API_KEY + "&t=";

export default class DoAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: " ",
      results: [],
      IMBDquery: " ",
      IMBDresults: []
    };
  }

  getInfo = event => {
    axios
      .get(`${API_URL}` + this.state.query)
      .then(({ data }) => {
        this.setState({
          results: data.Search
        });
      })
      .catch(err => console.log(err));
  };

  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value
      },
      () => {
          
        if (this.state.query && this.state.query.length > 1) {
          if (this.state.query.length % 2 === 0) {
            this.getInfo();
          }
          this.getInfo();
        } else if (!this.state.query) {
            this.getInfo();
        }
      }
    );
  };

  findIMBD = () => {
    this.setState(
      {
        IMBDquery: this.target.id
      },
      () => {
        if (this.state.IMBDquery && this.state.IMBDquery.length > 1) {
          if (this.state.IMBDquery.length % 2 === 0) {
            this.getMoreInfo();
          }
          this.getMoreInfo();
        } else if (!this.state.IMBDquery) {
            this.getMoreInfo();
        }
      }
    );
  };

  getMoreInfo = event => {
    axios
      .get(`${API_URL_MORE}` + this.state.IMBDquery)
      .then(({ data }) => {
        this.setState({
          IMBDresults: this.target.id
        });
        console.log(this.state.IMBDresults)
      })
      .catch(err => console.log(err));
  };


  render() {
    return (
      <div>
        <form id="searchForm" onsubmit={this.handleInputChange}>
          <input
            id="SearchBar"
            placeholder="Search for..."
            ref={input => (this.search = input)}
          />
          <input
            type="button"
            value="submit"
            id="submit"
            onClick={this.handleInputChange}
          />
        </form>
        <br></br>
        <div class="flex-container">
        {this.state.results.map(film => (
          <Suggestions {...film} />
        ))}
        </div>
      </div>
    );
  }
}
