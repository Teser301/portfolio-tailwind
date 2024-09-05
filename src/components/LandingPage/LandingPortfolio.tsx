import { projects } from "../../data/projectsData";
import Button from "../Basic/Button";

const getTruncatedDescription = (project: any, maxLength: number): string => {
  // Use shotDescription if it is not null, undefined, or empty; otherwise, fallback to description
  const description = project.shotDescription?.trim() || project.description;

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
    <div className="p-6">
      <h1 className="text-center text-2xl font-semibold mb-6 text-black dark:text-white">
        Portfolio
      </h1>
      <p className="text-center mb-6 text-gray-700 dark:text-gray-300">
        Here is a short showcase of some of the work that I have been involved
        with.
      </p>
      <div className="flex justify-center my-4">
        <Button text="Read More" href="/projects" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.slice(0, 6).map((project, index) => {
          const isOnline = project.status.toLowerCase().includes("online");
          // Return Projects, so we can add consts above it without too much hassle
          return (
            <div
              key={index}
              className="relative group w-full h-96 bg-cover bg-center rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform "
              style={{ backgroundImage: `url(${project.image})` }}
            >
              {/* Top Gradient Overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent opacity-75 z-10" />

              {/* Title Section */}
              <div className="absolute top-0 left-0 w-full p-4 z-50">
                <h2 className="text-white text-lg font-semibold">
                  {project.title}
                </h2>
              </div>

              {/* Hover Description Section */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-300 p-4 z-20">
                <p className="text-white mb-2 text-center">
                  {getTruncatedDescription(project, 200)}
                </p>

                {/* Show appropriate Button based on Project Status */}
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
      </div>
    </div>
  );
};

export default Portfolio;
