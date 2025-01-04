import React from 'react';
import Skill from '../Skill';
import user_info from "../../data/user_info.js";

export default function Skills({ type, sub }) {
    const skillsList = user_info.skills[sub] || [];

    return (
        <section id="hero" className="lg:px-24">
            <div className="hs-accordion-group">
            <div className="hs-accordion -mt-px first:rounded-t-lg last:rounded-b-lg dark:bg-zinc-950" id="hs-bordered-heading-one">
                <button className="heading-myfont text-2xl hs-accordion-toggle hs-accordion-active:text-[#8364D8] inline-flex items-center gap-x-3 w-full font-semibold text-start text-black py-4 px-5 hover:text-zinc-800 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-[#8364D8] dark:text-white dark:hover:text-violet-300 dark:focus:outline-none dark:focus:text-white" aria-expanded="false" aria-controls="hs-basic-bordered-collapse-one">
                    <svg className="hs-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6 6 6-6"></path>
                    </svg>
                    <svg className="hs-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m18 15-6-6-6 6"></path>
                    </svg>
                    {type}
                </button>
                <div id="hs-basic-bordered-collapse-one" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-bordered-heading-one">
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