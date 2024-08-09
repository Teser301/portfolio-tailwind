const experiences = [
  {
    year: "2017",
    title: "Junior Front-End Developer",
    company: "Webshark",
    description:
      "Began my career making landing pages and adverts for websites. Mastered the basics of HTML, CSS and a little bit of Javascript. This was also the time I was introduced to PHP and wordpress.",
  },
  {
    year: "2020",
    title: "Bankruptcy",
    company: "Vacant",
    description: "The company was shut down during Covid",
  },
  {
    year: "2021",
    title: "Front-End Developer",
    company: "Calashock",
    description:
      "Worked with a proper team to build and maintain e-shops using BigCommerce as the base. Learned the basics of React, Vue and Handlebars. Learned to communicate with clients about their needs and how best to work with their constraints",
  },
  {
    year: "2022",
    title: "Quit",
    company: "Vacant",
    description: "Left the company, at this time the workload was far exceeding what we were capable of and we were losing developers fast. Exhausted myself heavily",
  },
  {
    year: "2023",
    title: "Senior Front-End Developer",
    company: "Calashock",
    description: "Rejoined the company. Was given the opportunity of leading projects and development process's as well as communication. Managed to lead a team for a short time.",
  },
];

function VerticalTimeline() {
  return (
    <div className="p-6">
      <h1 className="text-center text-2xl font-semibold mb-6">Experience Timeline</h1>
      <div className="relative">
        {experiences.map((exp, index) => (
          <div key={index} className="grid grid-cols-2 py-10 items-start relative">
            {/* Dot and vertical line */}
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 bg-dPrimary rounded-full border-4 border-white relative z-10">
                <span className="absolute left-8 top-1/2 transform -translate-y-1/2 text-lg font-medium bg-dPrimary text-white p-1 rounded-md">{exp.year}</span>
              </div>
              <div className="h-full w-0.5 bg-dPrimary absolute"></div>
            </div>
            {/* Text content */}

            <div className="flex flex-col">
              <h2 className="text-xl font-bold mb-2">{exp.title}</h2>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Company: {exp.company}</h3>
              <p className="text-md text-gray-600 mb-4">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VerticalTimeline;
