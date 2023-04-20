import { Navbar } from "@/components";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const API_KEY = process.env.API_KEY;
const SingleMovie = async ({ params }) => {
  const movieId = params.id;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  const data = await response.json();

  const movie = data;
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <div className="w-[90vw] lg:max-w-6xl mx-auto my-12">
        <div className=" grid lg:flex items-center content-center space-y-8 lg:space-y-0 lg:space-x-8">
          <div>
            <Image
              width={700}
              height={500}
              src={`https://image.tmdb.org/t/p/original/${
                movie.backdrop_path || movie.poster_path
              }`}
              alt="Movie Image"
              className=" rounded-md group-hover:opacity-80 transition-opacity duration-300"
              style={{ maxWidth: "100%", height: "auto" }}
              placeholder="blur"
              blurDataURL="/loading-spinner.svg"
            />
          </div>
          <div>
            <h2 className=" text-center lg:text-left font-bold text-2xl lg:text-xl truncate mb-3">
              {movie.original_title}
            </h2>
            <p className="  mb-2">
              <span className=" font-bold lg:font-semibold mr-1 uppercase">
                Overview:{" "}
              </span>
              {movie.overview}
            </p>
            <p className=" mb-2">
              <span className=" font-bold lg:font-semibold mr-1 uppercase">
                Movie Length:
              </span>{" "}
              {movie.runtime} minutes
            </p>
            <p className=" mb-2">
              <span className=" font-bold lg:font-semibold mr-1 uppercase">
                Released Date:{" "}
              </span>
              {movie.release_date}
            </p>
            <p className=" mb-2">
              <span className=" font-bold lg:font-semibold mr-1 uppercase">
                Rating:
              </span>{" "}
              {Math.floor(movie.vote_average)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleMovie;
