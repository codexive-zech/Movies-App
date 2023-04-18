"use client";

import React, { useState, useEffect } from "react";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";

const DarkModeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      <div className=" bg-green-700">
        {mounted &&
          (currentTheme === "dark" ? (
            <MdLightMode
              className="dark-mode-toggle"
              onClick={() => setTheme("light")}
            />
          ) : (
            <BsFillMoonFill
              className="dark-mode-toggle"
              onClick={() => setTheme("dark")}
            />
          ))}
      </div>
      {/* {currentTheme === "dark" ? (
        <MdLightMode
          className="dark-mode-toggle"
          onClick={() => setTheme("light")}
        />
      ) : (
        <BsFillMoonFill
          className="dark-mode-toggle"
          onClick={() => setTheme("dark")}
        />
      )} */}
    </>
  );
};

export default DarkModeSwitch;
