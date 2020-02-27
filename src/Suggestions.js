import React from "react";
import Edsel from "./Edsel.jpg"

export default function Suggestions(props) {
  return (
    <div className="card">
      <h3 key={props.imdbID}>
        {props.Title} ({props.Year})
      </h3>
      <br />
      <img src={props.Poster} width="100%" id={props.imdbID} className="pic" alt={Edsel}/>
      <br />
    </div>
  );
}
