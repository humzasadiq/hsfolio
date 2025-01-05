import user_info from '../../data/user_info';
import favicon from '/favicon.png';
export default function Hero() {
    return (
        <section id="hero" className="pb-10 pt-20 sm:pt-20 md:pt-20 flex px-6 lg:px-24">
            
            <div className="self-center">
                <div className="hs-tooltip [--placement:right] hs-tooltip-toggle w-20">
                    <img
                        src={favicon}
                        className="rounded-full mb-6"
                        alt="Muhammad Hamza Sadiq"
                    />
                    <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity  inline-block absolute invisible z-10 py-1 px-2 bg-white border dark:border-zinc-800 dark:bg-zinc-950 text-xs font-medium text-zinc-950 dark:text-white rounded shadow-sm" role="tooltip">
                        Hello World!👋
                    </span>
                </div>
                <div className="flex gap-2 align-center flex-wrap md:flex-nowrap">
                <div className="lg:w-[80%] text-zinc-900 dark:text-zinc-100 self-center">
                    <h2 className="text-xl">{user_info.main.role}</h2>
                    <h1 className="heading-myfont font-black mt-3 text-3xl md:text-4xl lg:text-5xl w-full lg:w-[85%]">
                        {user_info.main.name}
                    </h1>

                    <p className="mt-6 dark:text-zinc-300 text-base font-light lg:w-[87%] leading-7">
                    {user_info.main.description}
                    </p>
                    
                </div>
                </div>
            </div>
        </section>
    )
} 