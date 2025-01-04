import React from 'react';
import Skill from '../Skill';
import user_info from "../../data/user_info.js";
import { FaCode, FaTools } from "react-icons/fa";


export default function Skills({ type, sub }) {
    const skillsList = user_info.skills[sub] || [];

    return (
        <section id="hero" className="lg:px-14">
            <div 
                className="hs-accordion-group"
            >
                <div className="hs-accordion active -mt-px first:rounded-t-lg last:rounded-b-lg dark:bg-zinc-950" id="hs-bordered-heading-one">
                    <span className="text-xl gap-2 cursor-pointer font-bold hs-accordion-toggle hs-accordion-active:text-black inline-flex items-center gap-x-3 w-full text-start text-black py-4 px-5 hover:text-zinc-800 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-white dark:text-white dark:hs-accordion-active:hover:text-violet-300 dark:hover:text-violet-300 dark:focus:outline-none" aria-expanded="false" aria-controls="hs-basic-bordered-collapse-one">
                        {(sub === "tools") &&
                            <FaTools className="text-2xl text-[#8364D8] dark:text-[#8364D8]" />
                        }   
                        {(sub === "languages") &&
                            <FaCode className="text-2xl text-[#8364D8] dark:text-[#8364D8]" />
                        }
                        {type}
                    </span>
                    <div id="hs-basic-bordered-collapse-one" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-bordered-heading-one">
                        <div className="pb-4 px-5 w-full text-sm font-medium text-zinc dark:text-gray-200">
                            {skillsList.length > 0 ? (
                                skillsList.map((tool, index) => (
                                    <Skill
                                        key={index}
                                        icon={tool.icon}
                                        title={tool.name}
                                        description={tool.desc}
                                        color={tool.color}
                                        isActive={tool.current}
                                    />
                                ))
                            ) : (
                                <p className="text-gray-400">No skills found in this category.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}