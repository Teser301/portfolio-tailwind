import { projects } from "../../data/projectsData";

const truncateTextAtSentence = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;

  const truncatedText = text.slice(0, maxLength);

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.slice(0, 6).map((project, index) => (
          <div
            key={index}
            className="relative group w-full h-96 bg-cover bg-center rounded-lg overflow-hidden"
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className="absolute top-0 left-0 w-full p-4 bg-customGray bg-opacity-75 z-10">
              <h2 className="text-white text-lg font-medium">
                {project.title}
              </h2>
            </div>
            <div className="absolute inset-0 bg-customGray bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-300 p-4">
              <p className="text-white mb-2 text-center">
                {truncateTextAtSentence(project.description, 200)}
              </p>
              <a
                href="/projects"
                className="inline-block px-4 py-2 rounded-md border border-transparent bg-white text-black dark:bg-black dark:text-white dark:border-white hover:bg-gray-100 dark:hover:bg-white dark:hover:text-dPrimary transition duration-300"
              >
                Visit Projects
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
