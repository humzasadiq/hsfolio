import user_info from '../../data/user_info';
import favicon from '/favicon.png';
import Contacts from './Contacts';
export default function Hero() {
    return (
        <section id="hero" className="pt-20 sm:pt-20 md:pt-20 flex px-6 lg:px-16 mb-10">
            
            <div className="self-center rounded-lg border border-zinc-300 dark:border-zinc-800 bg-[#eae8e5] dark:bg-zinc-900 p-6">
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
                    <h2 className="text-xl">{user_info.main.role} <p className=' inline text-base font-light'>from</p><span><img src="/flag-pakistan.svg" alt="Pakistan" className="inline mx-1 mb-1 w-8 h-8"/></span></h2>
                    <h1 className="heading-myfont font-black mt-3 text-3xl md:text-4xl lg:text-5xl w-full lg:w-[85%]">
                        {user_info.main.name}
                    </h1>

                    <div className='mt-6'>
                    <p className="dark:text-zinc-300 text-[14px] font-light lg:w-[87%]">
                    {user_info.main.description}
                    </p>
                    <p className="dark:text-zinc-300 text-[14px] font-light lg:w-[87%]">
                    {user_info.main.description2}
                    </p>
                    </div>
                    <Contacts/>
                </div>
                </div>
            </div>
        </section>
    )
} 