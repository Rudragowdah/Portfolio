import { PROJECTS } from "../constants";
const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="text-4xl my-20 text-center">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                width={150}
                height={150}
                className="rounded mb-6"
                alt={project.title}
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="font-semibold mb-2">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 font-medium text-sm mr-2 rounded text-purple-500 bg-neutral-900"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
