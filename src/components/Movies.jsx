"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { FetchMovies } from ".";
const Movies = () => {
  const [page, setPage] = useState(1);
  const getGenre = useSearchParams();
  const genreParams = getGenre.get("genre");
  return (
    <>
      <FetchMovies genreParams={genreParams} page={page} />
    </>
  );
};

export default Movies;
