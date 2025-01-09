import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
const Contacts = () => {
    return (
        <div className="flex flex-row items-start justify-start gap-4 mt-5 ml-6 md:ml-6 lg:ml-[95px] mb-10 underline decoration-dotted underline-offset-2 transition-all duration-300">
            <a
            class="text-sm text-zinc-950 dark:text-neutral-100  hover:decoration-solid" 
            href="https://github.com/humzasadiq"
            target="_blank"
            >
            Github
            </a>
            <a
            class="text-sm text-zinc-950 dark:text-neutral-100  hover:decoration-solid" 
            href="mail:humzasadiq92@gmail.com"
            target="_blank"
            >
            <span className="border-l-2 border-x-blue-400 text-zinc-950 dark:text-neutral-100 px-4">humzasadiq92@gmail.com</span>
            </a>

        </div>
    );
}

export default Contacts;