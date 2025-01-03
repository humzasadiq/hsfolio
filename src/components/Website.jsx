import { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";

const Website = ({ url, opened, setOpened }) => {
  return (
    <div
      className={`fixed w-full h-full inset-0 bg-black/50 z-[59] transition-opacity duration-300 ${
        opened ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      onClick={() => setOpened(false)} // Close modal on click outside
    >
      {/* Back Button */}
      <div
        className="text-[30px] text-black dark:text-white cursor-pointer absolute top-4 left-6 bg-white dark:bg-zinc-800 rounded-lg z-1000"
        onClick={() => setOpened(false)}
      >
        <IoMdArrowBack />
      </div>

      {/* Modal Content */}
      <div className="flex justify-center items-center h-full p-2">
        <div className="bg-white dark:bg-zinc-800 p-2 rounded-lg shadow-lg w-full h-[90vh]">
          {opened && ( // Conditionally render the iframe
            <iframe
              src={url}
              width="100%"
              height="100%"
              sandbox="allow-scripts allow-forms"
              loading="lazy"
              title="Custom Title"
              className="rounded-lg"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Website;