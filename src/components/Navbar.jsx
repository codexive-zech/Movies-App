"use client";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";

const navLinks = [
  {
    id: 1,
    title: "Trending",
    paramUrl: "fetchTrending",
  },
  {
    id: 2,
    title: "Top Rated",
    paramUrl: "fetchTopRated",
  },
];

const Navbar = () => {
  const searchParam = useSearchParams();
  const genre = searchParam.get("genre");
  return (
    <>
      <div className="flex items-center justify-center space-x-8 bg-gray-600 p-4 my-4">
        {navLinks.map((link) => {
          const { id, title, paramUrl } = link;
          return (
            <Link
              key={id}
              href={`/?genre=${paramUrl}`}
              className={`hover:text-amber-600 font-bold text-lg ${
                genre && genre === paramUrl
                  ? "underline underline-offset-8 decoration-4 decoration-amber-600 rounded-lg"
                  : null
              }`}
            >
              {title}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Navbar;
