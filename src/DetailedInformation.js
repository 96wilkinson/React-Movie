import React from "react";

export default function FurtherInformation(props) {
  return (
    <div className="cardFurther">

    <div className="row">
    <div className="column">
      <img
        src={props.Poster}
        width="100%"
        id={props.imdbID}
        className="pic"
      />
      </div>
      <div className="column">
      <h3 key={props.Title}>{props.Title}</h3>
      <p>Year of Release :{props.Year}</p>
      <p>Rated: {props.Rated}</p>
      <p>Date of Release:{props.Released}</p>
      <p>Runtime: {props.Runtime}</p>
      <p>Genre: {props.Genre}</p>
      <p>Director: {props.Director}</p>
      <p>Writer: {props.Writer}</p>
      <p>Actors: {props.Actors}</p>
      <p>Awards: {props.Awards}</p>
      <p>BoxOffice: {props.BoxOffice}</p>
      <p>Plot: {props.Plot}</p>
      </div>
      <br/>
  
      </div>


    </div>
  );
}

