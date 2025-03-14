import React from 'react';

const UnderConstruction = () => (
    <div
        className="absolute top-10 right-10 w-60 h-10 translate-x-20 rotate-[40deg] text-zinc-50 font-bold text-center flex items-center justify-center drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)]"
        style={{
          zIndex: 60,
          background: "repeating-linear-gradient(45deg, #FFA500, #FFA500 10px, #424242 10px, #424242 20px)",
        }}
      >
        Under Construction
      </div>
);

export default UnderConstruction;