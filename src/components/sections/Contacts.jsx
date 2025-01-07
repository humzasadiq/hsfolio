import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
const Contacts = () => {
    return (
        <div className="flex flex-col items-start justify-center gap-4 mt-5 ml-6 md:ml-6 lg:ml-[95px] mb-10">
            <div className="flex flex-row gap-2">
            <a
            class="group text-xs hover:bg-sky-600 relative bg-sky-700 rounded text-neutral-50 duration-500 font-semibold flex justify-start gap-1.5 items-center p-1"
            href="https://www.linkedin.com/in/hamza-sadiq-2004se/"
            target="_blank"
            >
            <FaLinkedin className="w-8 h-8 fill-neutral-50" />
            
            </a>
            <a
            class="group text-xs dark:bg-zinc-200 dark:hover:bg-zinc-300 bg-black hover:bg-zinc-800 relative rounded text-black duration-500 font-semibold flex justify-start gap-1.5 items-center p-1"
            href="https://github.com/humzasadiq"
            target="_blank"
            >
            <FaSquareGithub className="w-8 h-8 dark:fill-black fill-neutral-50" />
            </a>
            </div>
            <a
            class="group text-xs bg-blue-200/45 dark:bg-blue-300/45 hover:bg-blue-300 relative rounded text-black duration-500 font-semibold flex justify-start gap-1.5 items-center p-1"
            href="mail:humzasadiq92@gmail.com"
            target="_blank"
            >
            <img className="w-8 h-8 " src="https://img.icons8.com/color/48/000000/email.png" />
            <span className="border-l-2 border-x-blue-400 text-zinc-700 dark:text-neutral-100 px-2">humzasadiq92@gmail.com</span>
            </a>

        </div>
    );
}

export default Contacts;