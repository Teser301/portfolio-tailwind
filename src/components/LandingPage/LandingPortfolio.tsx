import Project1Image from "../../assets/kimbo.png"; // Replace with your actual project images
import Project2Image from "../../assets/fullycharged.png";
import Project3Image from "../../assets/purrform.png";

const projects = [
  {
    title: "Kimbo UK",
    image: Project1Image,
    link: "#",
    description: "Kimbo UK is a comprehensive platform designed for enhanced customer engagement and streamlined service management.",
  },
  {
    title: "Fully Charged",
    image: Project2Image,
    link: "#",
    description: "Fully Charged provides detailed reviews and ratings for the latest electronic gadgets and accessories.",
  },
  {
    title: "Purrform",
    image: Project3Image,
    link: "#",
    description: "Purrform is a cutting-edge fitness application that tracks your workouts and progress with an intuitive interface.",
  },
  // Add more projects as needed
];

function Portfolio() {
  return (
    <div className="p-6">
      <h1 className="text-center text-2xl font-semibold mb-6 text-black dark:text-white">Portfolio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="relative group w-full h-96 bg-cover bg-center rounded-lg overflow-hidden" style={{ backgroundImage: `url(${project.image})` }}>
            <div className="absolute top-0 left-0 w-full p-4 bg-customGray bg-opacity-75 z-10">
              <h2 className="text-white text-lg font-medium">{project.title}</h2>
            </div>
            <div className="absolute inset-0 bg-customGray bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-300 p-4">
              <p className="text-white mb-2">{project.description}</p>
              <a href={project.link} className="inline-block text-center text-black dark:text-white border border-white py-1 px-3 rounded hover:bg-white hover:text-black transition duration-300">
                Visit Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
