import React from "react";
import "./App.css";
import "./Card.css";
import "./Nav.css";
import Search from "./Search.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./nav";
import filmDetails from "./filmDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Nav}/>
        <Route exact path="/Search" component={Search}/>
        <Route path="/details/" component={filmDetails}/>
      </Router>
    </div>
  );
}

export default App;
