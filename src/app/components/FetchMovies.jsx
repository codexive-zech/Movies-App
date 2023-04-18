import React from "react";
import { MoviesResults } from ".";

const API_KEY = process.env.API_KEY;

const FetchMovies = async ({ genreParams, page }) => {
  const getGenreParams = genreParams || "fetchTrending";
  const response = await fetch(
    `https://api.themoviedb.org/3/${
      getGenreParams === "fetchTopRated"
        ? "movie/top_rated"
        : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=${page}`,
    { next: { revalidate: 10000 } }
  );

  const data = await response.json();
  const results = data.results;
  return (
    <>
      <MoviesResults results={results} />
    </>
  );
};

export default FetchMovies;
