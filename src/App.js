import React from "react";
import "./App.css";
import "./Card.css";
import "./Nav.css";
import Search from "./Search.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./nav";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Nav}/>
        <Route path="/Search" component={Search}/>
      </Router>
    </div>
  );
}

export default App;
