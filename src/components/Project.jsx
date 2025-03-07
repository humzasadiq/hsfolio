import React, { useState, useRef } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { TfiPlus } from "react-icons/tfi";
import { useIsVisible } from "./useIsVisible";

const CardWithBorders = ({ title, description, technologies, link, github, date, year }) => {
  const ref = useRef();
  const isVisible = useIsVisible(ref, true);

  return (
    <>
      <div
        ref={ref}
        className={`flex items-center justify-center bg-[#F3F4F6] dark:bg-black w-[95%] h-56 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
      <div className="relative w-[100%] h-56 bg-F3F4F6 dark:bg-black rounded-md border border-blue-200 dark:border-gray-700">
        <span className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-3 text-blue-300 dark:text-neutral-400 text-2xl font-thin">
          <TfiPlus />
        </span>
        <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-3 text-blue-300 dark:text-neutral-400 text-2xl font-thin">
          <TfiPlus />
        </span>
        <span className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-3 text-blue-300 dark:text-neutral-400 text-2xl font-thin">
          <TfiPlus />
        </span>
        <span className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-3 text-blue-300 dark:text-neutral-400 text-2xl font-thin">
          <TfiPlus />
        </span>

        
        <div className="p-4 transition-all duration-500 delay-200 flex justify-between">
          <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg text-zinc-700 dark:text-zinc-300 mt-2">
            {title}
          </h3>
          <p className="px-1 mb-2 text-zinc-500 dark:text-zinc-300 font-light text-xs mt-2">
            {description}
          </p>
          <div 
            className="gap-2 my-1 transition-all duration-500 delay-200 flex overflow-x-auto"
            style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
          >
            {technologies.split(",").map((tech, index) => (
              <span
                className="inline-flex flex-none items-center gap-x-1.5 p-1 mx-1 text-xs font-light text-black dark:text-white bg-gray-200/80 dark:bg-zinc-500/30 hover:bg-white/30 dark:hover:bg-zinc-400/30 rounded-lg cursor-pointer border border-slate-200 dark:border-zinc-800"
                key={index}
              >
                <img
                  src={`/tech/${tech}.svg`}
                  alt={tech}
                  className="w-5 h-5"
                  aria-hidden="true"
                />
                {tech}
              </span>
            ))}
          </div>
          <div className="absolute bottom-6">
            <div className="flex gap-3 text-zinc-600 dark:text-zinc-300 font-medium">
              { link &&
                <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 mt-4 hover:text-[#8364D8] hover:dark:text-[#8364D8] cursor-pointer transition-all duration-300"
              >
                <FaExternalLinkAlt className="text-2xl self-center" />
                <span className="text-xs self-center">View Project</span>
              </a>
              }
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 mt-4 hover:text-[#8364D8] hover:dark:text-[#8364D8] cursor-pointer transition-all duration-300"
              >
                <FaGithub className="text-2xl self-center" />
                <span className="text-xs self-center">Repository</span> 
              </a>
            </div>
          </div>
          </div>
          <div className="flex justify-center items-start sm:items-center">
            <p className="text-sm text-right text-zinc-500 dark:text-zinc-300">
              {date} <hr /> {year}
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CardWithBorders;
