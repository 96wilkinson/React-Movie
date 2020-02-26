import React, { Component } from 'react'
import axios from "axios";

export default class DoAll extends Component {
        constructor(props){
            super(props)
            this.statestate = {
                query: " ",
                results: []
              };
        }
    
    
        getInfo = event => {
            axios
              .get("http://www.omdbapi.com/?apikey=c2e9fda&s=" + this.state.query)
              .then(({ data }) => {
                this.setState({
                  results: data.search,
                  query: this.search.value
                });
                console.log(this.search.value)
                console.log(data);
        
              });
            //   .catch(err => console.err(err));
          };
        
          handleInputChange = () => {
            this.setState({
              query: this.search.value
            }, () => {
              if (this.state.query && this.state.query.length > 1) {
                if (this.state.query.length % 2 === 0) {
                  this.getInfo()
                }
              } else if (!this.state.query) {
              }
            })
          }
        
          render() {
            return (
              <input
                type="button"
                value="submit"
                id="submit"
                onClick={this.handleInputChange}
              />
            );
          }

  render() {
    return (
      <div>
        <form id="searchForm">
        <input
          id="SearchBar"
          placeholder="Search for..."
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
        />
        <input
        type="button"
        value="submit"
        id="submit"
        onClick={this.handleInputChange}
      />
      </form>
      </div>
    )
  }
}