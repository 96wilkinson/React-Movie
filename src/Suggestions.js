import React from "react";

export default function Suggestions(props) {


  return (
    <div class="card">
      <h3 key={props.Title}>{props.Title}</h3>
      <br></br>
      <p color>{props.Year}</p>
      <br></br>
      <img
        src={props.Poster}
        height="250"
        id={props.imdbID}
        className="pic"
        onclick=""
      />
    </div>
  );
}

