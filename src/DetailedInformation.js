import React from "react";

export default function FurtherInformation(props) {
  return (
    <article className="row">
      <section className="column left">
        <img
          src={props.Poster}
          height="100%"
          id={props.imdbID}
          className="pic"
        />
      </section>
      <section className="column right">
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
      </section>
    </article>

  );
}

