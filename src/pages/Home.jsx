import { useEffect, useContext } from "react"
import { AppContext } from "../App";
import ToggleTheme from "../components/ToggleTheme";
import Footer from "../components/sections/Footer";
import Hero from "../components/sections/Hero";
import EducationAndExperience from "../components/sections/EducationAndExperience";
import Projects from "../components/sections/Projects";
import Website from "../components/Website";

function Home() {
  const { theme, switchTheme } = useContext(AppContext);
    return (
        // <div className="bg-zinc-100 dark:bg-zinc-900">
      <div className="xl:w-[1200px] md:mx-auto h-full border-x border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <Hero/>
        <Projects/>
        <Website/>
        <EducationAndExperience/>
        <hr className="mt-12 border border-zinc-300 dark:border-zinc-800" />
        <Footer theme={theme} />
      </div>
    // </div>
    )
}

export default Home;