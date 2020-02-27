import React, { Component } from "react";
import axios from "axios";
import MoreInformation from "./DetailedInformation";

const API_KEY = "c2e9fda";
const API_URL_MORE = "http://www.omdbapi.com/?apikey=" + API_KEY + "&i=";
const url = window.location.href;
const FindID = url.substring(32,51);


export default class filmDetails extends Component {
    

    componentDidMount() {
        console.log(FindID);
        this.getMoreInfo();
    }

    constructor(props) {
        super(props);
        this.state = {
          IMDBresults: []
        };
      }

    getMoreInfo = event => {
        axios
          .get(`${API_URL_MORE}` + FindID)
          .then(({ data }) => {
            this.setState({
              IMDBresults: [data]
            });
            console.log(this.state.IMDBresults);
          })
          .catch(err => console.log(err));
      };

render() {

    return(
        <div>
        <article class="cardFurther">
          {Array.isArray(this.state.IMDBresults) && this.state.IMDBresults.map(info => (
            <MoreInformation {...info} />
          ))}
        </article>
        </div>
    );
}
}