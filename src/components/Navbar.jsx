import ToggleTheme from "./ToggleTheme";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AppContext } from "../App";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";

export default function Navbar() {
  const { theme, switchTheme } = useContext(AppContext);
  const [opened, setOpened] = useState(false);

  return (
    <div className="transparent h-[8vh] fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center px-6 xl:w-[1200px] md:mx-auto h-full border-x border-zinc-50 dark:border-black bg-zinc-50/70 dark:bg-zinc-950/70 backdrop-blur">
        <div className="heading text-[14px] flex gap-4 mx-auto text-black dark:text-zinc-100 sm:hidden lg:flex underline decoration-dotted">
          <Link
            to="/"
            className="transition-all duration-300 hover:decoration-solid"
          >
            Home
          </Link>
          <a
            href="#"
            className="transition-all duration-300 hover:decoration-solid"
          >
            Projects
          </a>
          <a
            href="#"
            className="transition-all duration-300 hover:decoration-solid"
          >
            Gallery
          </a>
          <a
            href="#"
            className="transition-all duration-300 hover:decoration-solid"
          >
            Contact
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
        className={`fixed inset-0 bg-black/50 z-[59] transition-opacity duration-300 lg:hidden ${
            opened ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpened(false)}
        >
      </div>      

      {/* Sidebar */}
      <div
        id="hs-offcanvas-example"
        className={`hs-overlay [--auto-close:lg] transition-all duration-300 transform fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-black dark:border-neutral-700 ${
            opened ? "translate-x-0 opacity-100 pointer-events-auto" : "-translate-x-full opacity-0 pointer-events-none"
        }`}
        role="dialog"
        tabIndex="-1"
        aria-label="Sidebar"
        >
            {/* className="heading text-[14px] flex gap-4 mx-auto text-black dark:text-zinc-100 sm:hidden" */}
        <nav className="heading hs-accordion-group p-6 w-full flex flex-col flex-wrap">
          <ul className="space-y-1.5">
            <li className="underline decoration-dotted">
              <Link
                to="/"
                className="flex items-center gap-x-3.5 py-2 px-2.5 transition-all duration-300 rounded-lg dark:text-white hover:decoration-solid"
                onClick={() => setOpened(false)}
              >
                Home
              </Link>
            </li>
            <li className="underline decoration-dotted">
              <a
                href="#"
                className="flex items-center gap-x-3.5 py-2 px-2.5 transition-all duration-300 rounded-lg dark:text-white hover:decoration-solid"
                onClick={() => setOpened(false)}
              >
                Projects
              </a>
            </li>
            <li className="underline decoration-dotted">
              <a
                href="#"
                className="flex items-center gap-x-3.5 py-2 px-2.5 transition-all duration-300 rounded-lg dark:text-white hover:decoration-solid"
                onClick={() => setOpened(false)}
              >
                Gallery
              </a>
            </li>
            <li className="underline decoration-dotted">
              <a
                href="#"
                className="flex items-center gap-x-3.5 py-2 px-2.5 transition-all duration-300 rounded-lg dark:bg-blak dark:text-white hover:decoration-solid"
                onClick={() => setOpened(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    
  );
}