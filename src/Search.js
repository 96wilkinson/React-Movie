import React, { Component } from "react";
import axios from "axios";
import Suggestions from "./Suggestions";
import MoreInformation from "./DetailedInformation";

const API_KEY = "c2e9fda";
const API_URL = "http://www.omdbapi.com/?apikey=" + API_KEY + "&s=";
const API_URL_MORE = "http://www.omdbapi.com/?apikey=" + API_KEY + "&i=";

export default class DoAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: " ",
      results: [],
      IMDBquery: " ",
      IMDBresults: []
    };
  }

  getInfo = event => {
    axios
      .get(`${API_URL}` + this.state.query)
      .then(({ data }) => {
        this.setState({
          results: data.Search
        });
        console.log(data);
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

  findIMDB = event => {
    this.setState(
      {
        IMDBquery: event.target.id
      },
      () => {
        if (this.state.IMDBquery && this.state.IMDBquery.length > 1) {
          if (this.state.IMDBquery.length % 2 === 0) {
            this.getMoreInfo();
          }
          this.getMoreInfo();
        } else if (!this.state.IMDBquery) {
          this.getMoreInfo();
        }
      }
    );
  };

  getMoreInfo = event => {
    axios
      .get(`${API_URL_MORE}` + this.state.IMDBquery)
      .then(({ data }) => {
        this.setState({
          IMDBresults: [data]
        });
        console.log(this.state.IMDBresults);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <main>
        <form id="searchForm">
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
        <div>
        <article className="flex-container" onClick={this.findIMDB}>
          {Array.isArray(this.state.results) &&
            this.state.results.map(film => <Suggestions {...film} />)}
        </article>
        </div>
        <br/>
        <div>
        <article className="flex-container-further">
          {Array.isArray(this.state.IMDBresults) && this.state.IMDBresults.map(info => (
            <MoreInformation {...info} />
          ))}
        </article>
        </div>
      </main>
    );
  }
}
// 
