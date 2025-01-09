import ToggleTheme from "./ToggleTheme";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { IoMdArrowBack } from "react-icons/io";

export default function Navbar() {
  const { theme, switchTheme } = useContext(AppContext);
  const [opened, setOpened] = useState(false);

  return (
    <div className="h-[8vh] fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center px-6 xl:w-[1200px] md:mx-auto h-full border-x border-zinc-50 dark:border-black bg-zinc-50/70 dark:bg-zinc-950/70 backdrop-blur">
        <div className="heading-myfont text-[16px] gap-4 mx-auto text-black dark:text-zinc-100 hidden lg:flex underline decoration-dotted decortion-thick">
          <Link
            to="/"
            className="transition-all duration-300 hover:decoration-solid"
          >
            Portfolio
          </Link>
          <a
            href="/gallery"
            className="transition-all duration-300 hover:decoration-solid"
          >
            Gallery
          </a>
          <a
            href="https://drive.google.com/file/d/1IrDYMrxKeeSfb17pX6ttNjJQlggyb3iy/view?usp=sharing"
            className="transition-all duration-300 hover:decoration-solid"
          >
            Résumé
          </a>
        </div>
        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setOpened(!opened)}
            className="text-3xl text-black dark:text-zinc-100"
            aria-haspopup="dialog"
            aria-expanded={opened}
            aria-controls="hs-offcanvas-example"
            aria-label="Toggle navigation"
          >
            <HiOutlineBars3BottomLeft />
          </button>
        </div>
        <ToggleTheme switchTheme={switchTheme} />
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 z-[59] transition-opacity duration-300 lg:hidden ${
            opened ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none display-none"
        }`}
        onClick={() => setOpened(false)}
        >
        <nav className="heading-myfont hs-accordion-group p-6 w-full flex flex-col flex-wrap justify-center items-center h-full bg-zinc-50 dark:bg-zinc-950">
            <div 
            className="text-[30px] text-black dark:text-white cursor-pointer absolute top-4 left-6"
            onClick={() => setOpened(false)}
            >
                <IoMdArrowBack/>
            </div>
          <ul className="space-y-1.5">
            <li className="underline decoration-dotted">
              <Link
                to="/"
                className="flex items-center gap-x-3.5 py-2 px-2.5 transition-all duration-300 rounded-lg dark:text-white hover:decoration-solid"
                onClick={() => setOpened(false)}
              >
                Portfolio
              </Link>
            </li>
            <li className="underline decoration-dotted">
              <a
                href="/gallery"
                className="flex items-center gap-x-3.5 py-2 px-2.5 transition-all duration-300 rounded-lg dark:text-white hover:decoration-solid"
                onClick={() => setOpened(false)}
              >
                Gallery
              </a>
              
            </li>
            <li className="underline decoration-dotted">
              <a
                href="https://drive.google.com/file/d/1IrDYMrxKeeSfb17pX6ttNjJQlggyb3iy/view?usp=sharing"
                className="flex items-center gap-x-3.5 py-2 px-2.5 transition-all duration-300 rounded-lg dark:text-white hover:decoration-solid"
              >
                Résumé
              </a>
            </li>
          </ul>
        </nav>   
      </div>      
    </div>
    
  );
}