import user_info from "../../data/user_info.js";
import Project from "../Project.jsx";
import { FaCircle } from "react-icons/fa";

function Projects() {
  return (
    <div id="projects" className="flex flex-col items-center">
    <h4 className="text-xl dark:text-white mb-4 font-bold flex gap-2 items-center">
    <FaCircle className="text-2xl text-black dark:text-white" />
        Projects
    </h4>
    <div className="flex justify-center items-center w-full">
        <section
      
      className="grid grid-cols-1 gap-8 md:gap-12 lg:p-2 lg:gap-14 w-full pl-6 md:pl-8 lg:pl-8 2xl:pl-10 xl:pl-16 max-w-screen-xl"
    >
      {user_info.projects.map((project, index) => {
        return (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
            link={project.link}
            date={project.date}
            year={project.year}
          />
        );
      })}
    </section>
    </div>
    </div>
  );
}

export default Projects;