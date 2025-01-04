import { useIsVisible } from "./useIsVisible";
import { useRef } from "react";

const Skill = ({ icon, title, description, color, isActive }) => {
    const ref = useRef();
    const isVisible = useIsVisible(ref, false);

    return (
        <span
            ref={ref}
            className={`relative inline-flex items-center text-xs font-medium gap-3 m-2 pl-2 pr-2.5 py-2 rounded-lg shadow-md transition-all duration-300 border border-neutral-200 dark:border-neutral-800
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
            style={{ backgroundColor: `${color}20` }}
        >
            <img
                src={`/tech/${icon}.svg`}
                alt={title}
                className="w-11 h-11 p-1 rounded-lg"
                style={{ backgroundColor: `${color}40` }}
            />

            <div>
                <p className="text-sm font-medium text-zinc dark:text-gray-200">{title}</p>
                <p className="text-xs text-zinc-400 dark:text-gray-400">{description}</p>
            </div>

            {/* {isActive && (
                <span className="absolute top-0.5 end-0.5 inline-flex items-center size-3 rounded-full border-2 border-white text-xs font-medium transform -translate-y-1/2 translate-x-1/2 bg-teal-500 text-white dark:border-neutral-900">
                    <span className="sr-only">Badge value</span>
                </span>
            )} */}
        </span>
    );
};

export default Skill;