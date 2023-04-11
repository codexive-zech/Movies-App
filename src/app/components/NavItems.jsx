import Link from "next/link";
import React from "react";
import { navItems } from "../../../utils/data";

const NavItems = () => {
  return (
    <div className=" flex items-center space-x-5 lg:space-x-8">
      {navItems.map((nav) => {
        const { id, title, url } = nav;
        return (
          <div key={id}>
            <Link
              href={url}
              className=" text-2xl font-semibold hover:text-amber-600"
            >
              {title}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default NavItems;
