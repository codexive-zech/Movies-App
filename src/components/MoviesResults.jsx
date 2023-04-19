import React from "react";
import { Card } from ".";

const MoviesResults = ({ results }) => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[90vw] lg:max-w-6xl mx-auto my-8 gap-5 ">
      {results.map((movie) => {
        return <Card key={movie.id} movie={movie} />;
      })}
    </div>
  );
};

export default MoviesResults;
