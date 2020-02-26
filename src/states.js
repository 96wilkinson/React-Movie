import React from "react";

export default class States extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: " ",
      results: [],
      IMBDquery: " ",
      IMBDresults: []
    };
  }
}
