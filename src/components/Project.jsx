import React, { useState, useRef } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { TfiPlus } from "react-icons/tfi";
import Website from "./Website";
import { useIsVisible } from "./useIsVisible";

const CardWithBorders = ({ title, description, technologies, link, github }) => {
  const ref = useRef();
  const isVisible = useIsVisible(ref, true);
  const [opened, setOpened] = useState(false);

  return (
    <>
      <div
        ref={ref}
        className={`flex items-center justify-center bg-black w-96 h-72 hover:bg-zinc-100 hover:dark:bg-zinc-900 transition-all duration-500 delay-200 ${
          isVisible ? "opacity-90 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
      {/* Card Container */}
      <div className="relative w-96 h-72 bg-violet-50 dark:bg-black border border-violet-200 dark:border-gray-700 hover:bg-violet-100 dark:hover:bg-zinc-900">
        {/* "+" Signs in Corners */}
        <span className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-3 text-violet-500 dark:text-white text-2xl font-thin">
          <TfiPlus />
        </span>
        <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-3 text-violet-500 dark:text-white text-2xl font-thin">
          <TfiPlus />
        </span>
        <span className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-3 text-violet-500 dark:text-white text-2xl font-thin">
          <TfiPlus />
        </span>
        <span className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-3 text-violet-500 dark:text-white text-2xl font-thin">
          <TfiPlus />
        </span>

        {/* Content Inside the Card */}
        <div className="p-4">
          {/* =========== PROJECT TITLE =========== */}
          <h3 className="font-bold text-lg text-zinc-700 dark:text-zinc-300 mt-4">
            {title}
          </h3>
          {/* =========== PROJECT DESCRIPTION =========== */}
          <p className="px-2 mb-4 leading-7 text-zinc-500 dark:text-zinc-300 font-light text-xs mt-4">
            {description}
          </p>
          <div className="gap-2 my-1">
            {/* =========== TECHNOLOGIES USED =========== */}
            {technologies.split(",").map((tech, index) => (
              <span
                className="inline-flex items-center gap-x-1.5 py-1 px-2 mx-1 text-xs font-medium text-black dark:text-white bg-violet-100/80 dark:bg-zinc-400/30 rounded-full"
                key={index}
              >
                <img
                  src={`/tech/${tech}.svg`}
                  alt={tech}
                  className="w-6 h-6"
                  aria-hidden="true"
                />
                {tech}
              </span>
            ))}
          </div>
          <div className="absolute bottom-6">
            <div className="flex gap-3 text-zinc-600 dark:text-zinc-300 font-medium">
              {/* =========== PROJECT LINK =========== */}
              { link &&
                <div
                onClick={() => setOpened(true)} // Open the Website component
                className="flex gap-2 mt-4 hover:text-[#8364D8] hover:dark:text-[#8364D8] cursor-pointer transition-all duration-300"
              >
                <FaExternalLinkAlt className="text-2xl self-center" />
                <span className="text-xs self-center">View Project</span>
              </div>
              }
              {/* =========== PROJECT GITHUB =========== */}
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 mt-4 hover:text-[#8364D8] hover:dark:text-[#8364D8] cursor-pointer transition-all duration-300"
              >
                <FaGithub className="text-2xl self-center" />
                <span className="text-xs self-center">View Github</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Website Component (Modal) */}
    </div>
    <Website url={link} opened={opened} setOpened={setOpened} />
    </>
  );
};

export default CardWithBorders;