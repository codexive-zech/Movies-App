import React from "react";

const MoviesResults = ({ results }) => {
  return (
    <div>
      {results.map((movie) => {
        return <p key={movie.key}>{movie.title}</p>;
      })}
    </div>
  );
};

export default MoviesResults;
