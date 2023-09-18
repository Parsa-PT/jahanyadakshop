"use client";
import React from "react";
import { useTheme } from "next-themes";
import { FaRegMoon } from "react-icons/fa";
import { BsSun } from "react-icons/bs";

const ThemeButton = () => {
    const { theme, setTheme } = useTheme()

  return (
    <div>
      <button className=" flex justify-center items-center border-2 text-xs  md:mr-5 md:text-base border-black dark:border-white mr-3 p-1 rounded-md" onClick={()=> setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? (<BsSun aria-label="sun" />) : (<FaRegMoon aria-label="moon"/>)}
      </button>
    </div>
  );
};

export default ThemeButton;
