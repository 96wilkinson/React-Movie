import React from "react";

export default class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/Search">Search</a>
            </li>
          </ul>
        </nav>

        <h2 >Welcome To the Movie Searcher...Thingie</h2>
      </div>
    );
  }
}
