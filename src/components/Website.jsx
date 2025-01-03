import { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";

const Website = ({ url, opened, setOpened }) => {
  return (
    <div
      className={`fixed w-full h-full inset-0 bg-black/50 z-[59] transition-opacity duration-300 ${
        opened ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      onClick={() => setOpened(false)}
    >
    <div
    className="text-[30px] text-black dark:text-white cursor-pointer absolute top-4 left-6 bg-white dark:bg-zinc-800 rounded-lg"
    onClick={() => setOpened(false)}
    >
    <IoMdArrowBack />
    </div>

      <div className="flex justify-center items-center h-full p-4">
        <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-lg w-full max-w-4xl h-[90vh]">
          <iframe
            src={url}
            width="100%"
            height="100%"
            sandbox="allow-scripts allow-forms"
            loading="lazy"
            title="Custom Title"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Website;