import VerticalTimeline from "../components/Timeline";
function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl w-full bg-white dark:bg-gray-800 shadow-md rounded-lg p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="rounded-full w-32 h-32 md:w-48 md:h-48 mb-4 md:mb-0 md:mr-6 shadow-lg"
            />
          </div>

          {/* About Me Content */}
          <div>
            <h1 className="text-3xl font-bold mb-4 text-center md:text-left text-gray-800 dark:text-gray-100">
              About Me
            </h1>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
              Hi, I'm [Your Name], a passionate developer with a love for
              creating beautiful, functional, and user-friendly web
              applications. With a background in [Your Background], I specialize
              in [Your Specializations]. My goal is to continuously grow as a
              developer and create products that not only meet but exceed client
              expectations.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
              When I'm not coding, you can find me [Your Hobbies/Interests]. I
              believe in lifelong learning and am always looking to expand my
              skill set and take on new challenges.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Feel free to check out my portfolio, and don't hesitate to reach
              out if you'd like to collaborate on a project or just chat about
              tech!
            </p>
          </div>
        </div>
      </div>
      <VerticalTimeline />
    </div>
  );
}

export default About;
