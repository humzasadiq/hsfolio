import { FaGithub } from 'react-icons/fa';
const Contacts = () => {
    return (
        <div className="flex flex-row items-start justify-start gap-4 mt-5 ml-6 md:ml-6 lg:ml-[95px] mb-10 ">
            <a
            class="inline-flex text-sm sm:text-base font-semibold text-[#1E1E1E] dark:text-[#F1F1F1]  hover:decoration-solid underline decoration-dotted underline-offset-4 transition-all duration-300" 
            href="https://github.com/humzasadiq"
            target="_blank"
            >
            <FaGithub className='w-5 h-5 mr-1.5'/>Github
            </a>
            <a
            class="text-sm sm:text-base font-semibold text-[#1E1E1E] dark:text-[#F1F1F1]  hover:decoration-solid underline decoration-dotted underline-offset-4 transition-all duration-300"  
            href="mail:humzasadiq92@gmail.com"
            target="_blank"
            >
            <span className="border-l-2 border-x-blue-400 text-zinc-950 dark:text-neutral-100 px-4">humzasadiq92@gmail.com</span>
            </a>

        </div>
    );
}

export default Contacts;