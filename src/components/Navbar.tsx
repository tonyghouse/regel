'use client'
import React, { ReactElement, useContext, useState } from "react";
import { ThemeContext, IThemeContextType } from "../context/ThemeContext";
import {RxSun,RxMoon,RxTextAlignRight} from "react-icons/rx";
import Link from "next/link";

interface Navlink{
  id: number;
  name: string;
  url: string;
}

const Navbar = (): ReactElement => {
  const [sideMenu, setSideMenu] = useState<boolean>(false);
  const themeContext = useContext<IThemeContextType>(ThemeContext);

  const toggleSideMenu = (): void => {
    console.log("toggled menu");
    setSideMenu(!sideMenu);
  };

  const toggleTheme = (): void => {
    console.log("toggling theme: ",themeContext.themeMode);
    themeContext.toggleThemeMode();
  };

  const navlinks: Navlink[] = [
    { id:0, name: "Cheat Sheet", url: "/cheatsheet" },
    { id:1, name: "Guide", url: "/guide" },
    { id:2, name: "Github", url: "https://github.com/tonyghouse/regel" },
  ];

  return (
    <nav
      id="navigation"
      className={` ${themeContext.themeMode === "dark" ? "border-[white]" : "border-[#020817]"} flex  w-full items-center justify-between py-1 px-2 border-[0.05rem]  `}
    >
      <a href="/" className="z-[100] cursor-pointer">
        <span className="text-[1rem] md:text-[1.2rem] font-semibold ">Regel</span>
      </a>

      <div
        className={`${sideMenu ? "flex" : "hidden md:flex"} 
        flex-col fixed top-0  left-0 z-[100] h-full  w-full  items-end justify-center p-8 backdrop-blur-md 
        md:relative md:h-auto md:w-auto md:flex-row md:items-center md:justify-end md:bg-transparent md:p-0`}
      >
        <ul
          className=" mr-4 flex flex-col tracking-wide font-medium 
                       md:flex-row text-[0.7rem]  leading-10 md:text-[0.8rem] md:leading-8 "
        >
          {navlinks.map((navLink: Navlink) => (
            <li key={navLink.id} className={`${themeContext.themeMode === "dark" ? "hover:border-white" : "hover:border-[#020817]"}  px-5 py-3 md:px-4 md:py-0 hover:border-b-[0.01rem] `}>
              <Link
                className=""
                href={navLink.url}
              >
                <span className="">{navLink.name}</span>
              </Link>
            </li>
          ))}
          <li key="theme" className="px-2 py-3 md:px-[0.9rem] md:py-0">
            <button onClick={toggleTheme}>
             {themeContext.themeMode ==="dark" ?<RxMoon/>: <RxSun/>}
             </button>
          </li>
        </ul>
      </div>
      {/* <div  
        className={`${sideMenu ? "bg-red-300" : "bg-green-500"} 
                    accent z-[100] w-[1.25rem] cursor-pointer text-center text-xl md:hidden`}> */}
        <RxTextAlignRight className="md:hidden" onClick={toggleSideMenu}/>
      {/* </div> */}
   
    </nav>
  );
}

export default Navbar;
