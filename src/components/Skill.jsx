import { useIsVisible } from "./useIsVisible";
import { useRef } from "react";

const Skill = ({ icon, title, description, color, isActive }) => {
    const ref = useRef();
    const isVisible = useIsVisible(ref, false);

    return (
        <span
            ref={ref}
            className={`relative inline-flex items-center text-xs font-medium gap-1.5 sm:gap-2 md:gap-3 m-1 sm:m-1.5 pl-1 sm:pl-2 pr-2 sm:pr-2.5 py-1 sm:py-1.5 rounded-lg shadow-sm transition-all duration-300 border border-neutral-200 dark:border-neutral-800
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
            style={{ backgroundColor: `${color}20` }}
        >
            <img
                src={`/tech/${icon}.svg`}
                alt={title}
                className="w-8 h-8 sm:w-11 sm:h-11 p-1 rounded-lg"
                style={{ backgroundColor: `${color}40` }}
            />

            <div>
                <p className="text-xs font-medium text-zinc dark:text-gray-200">{title}</p>
                <p className="text-[0.6rem] sm:text-xs text-zinc-400 dark:text-gray-400">{description}</p>
            </div>

            {/* {isActive && (
                <span className="absolute top-0.5 end-0.5 inline-flex items-center size-3 rounded-full border-2 border-white text-xs font-medium transform -translate-y-1/2 translate-x-1/2 bg-teal-500 text-white dark:border-neutral-900">
                    <span className="sr-only">Active</span>
                </span>
            )} */}
        </span>
    );
};

export default Skill;