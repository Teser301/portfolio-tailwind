import { projects } from "../../data/projectsData";
import { ProjectType } from "../../types/project";
import Button from "../Basic/Button";

const getTruncatedDescription = (
  project: ProjectType,
  maxLength: number
): string => {
  // Use shotDescription if it is not null, undefined, or empty; otherwise, fallback to description
  const description = project.shortDescription?.trim() || project.description;

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
  return (
    <div className="my-4">
      <h3 className="text-3xl font-extrabold text-primary text-center my-8">
        Projects
      </h3>
      <p className="text-center mb-6">
        Here is a short showcase of some of the work that I have been involved
        with.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:grid-rows-3 lg:grid-rows-2 gap-8 p-8 bg-backgroundPrimary ">
        {projects.slice(0, 6).map((project, index) => {
          const isOnline = project.status.toLowerCase().includes("online");
          // Return Projects, so we can add consts above it without too much hassle
          return (
            <div
              key={index}
              className="relative group w-full h-96 bg-cover bg-center rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform"
              style={{ backgroundImage: `url(${project.image})` }}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent opacity-75 z-10" />

              <div className="absolute top-0 left-0 w-full p-4 z-50">
                <h2 className="text-light text-lg font-semibold">
                  {project.title}
                </h2>
              </div>

              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-300 p-4 z-20">
                <p className="text-light mb-2 text-center">
                  {getTruncatedDescription(project, 200)}
                </p>

                {isOnline ? (
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
