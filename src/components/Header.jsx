import Link from "next/link";
import React from "react";
import { DarkModeSwitch, NavItems } from ".";

const Header = () => {
  return (
    <div className=" flex items-center justify-between py-5 lg:py-4 w-[90vw] lg:max-w-6xl mx-auto">
      {/* Nav Menu */}
      <div>
        <NavItems />
      </div>

      {/* Nav Logo and Dark Mode Toggle */}
      <div className=" flex items-center justify-between space-x-5">
        <DarkModeSwitch />
        <Link href="/" className=" text-2xl">
          <span className=" bg-amber-600 px-2 py-1 rounded-lg font-bold mr-1 uppercase">
            Chic
          </span>
          <span className=" hidden md:inline-block">Movies</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
