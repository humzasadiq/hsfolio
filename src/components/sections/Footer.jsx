import user_info from "../../data/user_info.js";
import { FaArrowCircleUp } from "react-icons/fa";

function Footer({ theme }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  

  return (
    <>
    <footer className="p-4 text-center justify-center items-center flex flex-col gap-2 text-zinc-600 dark:text-zinc-300 text-sm font-light"
    
    >
      {/* =========== USER COPYRIGHT =========== */}
      <p className="text-zinc-600 self-center mt-2 md:mt-0 dark:text-zinc-300 text-sm text-center font-light">
        {user_info.footer}
      </p>
      {/* =========== SCROLL ON TOP BUTTON =========== */}
      <button
        onClick={() => scrollToTop()}
        className="text-zinc-600 self-center mt-2 md:mt-0 dark:text-zinc-300 mx-auto md:mx-0 text-sm font-light flex gap-2"
      >
        <FaArrowCircleUp className="self-center text-[#8364D8] dark:text-[#8364D8]" /> Go back to top
      </button>
      
    </footer>
    <div className="h-[50px] md:h-[150px]"></div>
    </>
  );
}

export default Footer;
