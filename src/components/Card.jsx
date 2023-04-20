import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";

const Card = ({ movie }) => {
  return (
    <div className=" cursor-pointer border border-slate-400 shadow-md hover:shadow-slate-400 rounded-lg group p-2 transition-shadow duration-300">
      <Link href={`/movie/${movie.id}`}>
        <div className=" flex items-center">
          <Image
            width={500}
            height={300}
            src={`https://image.tmdb.org/t/p/original/${
              movie.backdrop_path || movie.poster_path
            }`}
            alt="Movie Image"
            className=" rounded-t-md group-hover:opacity-80 transition-opacity duration-300"
            style={{ maxWidth: "100%", height: "auto" }}
            placeholder="blur"
            blurDataURL="/loading-spinner.svg"
          />
        </div>
        <div className=" my-4 space-y-3">
          <p className=" line-clamp-3">{movie.overview}</p>
          <h2 className=" font-bold text-xl truncate">
            {movie.title || movie.original_title || movie.name}
          </h2>
          <div className=" flex items-center ">
            <p>{movie.release_date || movie.first_air_date}</p>
            <FiThumbsUp className=" ml-5 mr-2" />
            <p>{movie.vote_count}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
