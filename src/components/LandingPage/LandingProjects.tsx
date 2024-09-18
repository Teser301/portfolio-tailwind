import { projects } from "../../data/projectsData";
import { ProjectType } from "../../types/project";
import Button from "../Basic/Button";
import Heading from "../Basic/Heading";

const getTruncatedDescription = (
  project: ProjectType,
  maxLength: number
): string => {
  const description = project.description;

  if (description.length <= maxLength) return description;

  const truncatedText = description.slice(0, maxLength);
  // To stop cutting off sentences, check for dots, excalation and question marks. Then cut it off
  const lastSentenceEnd = Math.max(
    truncatedText.lastIndexOf("."),
    truncatedText.lastIndexOf("!"),
    truncatedText.lastIndexOf("?")
  );

  if (lastSentenceEnd === -1) {
    const lastSpace = truncatedText.lastIndexOf(" ");
    return truncatedText.slice(0, lastSpace) + "...";
  }

  return truncatedText.slice(0, lastSentenceEnd + 1) + "...";
};

const Portfolio: React.FC = () => {
  const handleClick = (url: string) => {
    if (window.innerWidth < 768) {
      window.open(url, "_blank");
    }
  };

  return (
    <div className="my-4">
      <Heading
        tag="h3"
        text="Projects"
        subheading=" Here is a short showcase of some of the work that I have been involved
        with."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:grid-rows-3 lg:grid-rows-2 gap-8 p-8 bg-backgroundPrimary shadow-md rounded-lg">
        {projects.slice(0, 6).map((project, index) => {
          return (
            <div
              key={index}
              className="relative group w-full h-40 md:h-96 bg-cover bg-center rounded-lg overflow-hidden shadow-md transition-transform duration-300 transform"
              style={{ backgroundImage: `url(${project.image})` }}
              onClick={() => {
                if (project.link) {
                  handleClick(project.link);
                } else {
                  handleClick("/projects");
                }
              }}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent opacity-75 z-10" />

              <div className="absolute top-0 left-0 w-full p-4 z-50">
                <h2 className="text-light text-lg font-semibold">
                  {project.title}
                </h2>
              </div>

              <div className="flex flex-col absolute inset-0 bg-black bg-opacity-50 md:opacity-0 group-hover:opacity-100 items-end md:items-center justify-end md:justify-center transition-opacity duration-300 p-4 z-20">
                <p className="text-light mb-2 text-center hidden md:block">
                  {getTruncatedDescription(project, 200)}
                </p>

                {project.link ? (
                  <Button
                    text="View Live"
                    href={project.link}
                    target="_blank"
                    className="mt-4"
                  />
                ) : (
                  <Button text="Read More" href="/projects" className="mt-4" />
                )}
              </div>
            </div>
          );
        })}
        <div className="col-span-full flex flex-col items-center justify-center my-4">
          <Button text="See more projects" href="/projects" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
