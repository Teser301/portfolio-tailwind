import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const GetInTouch: React.FC = () => {
  return (
    <div className="max-w-md mx-auto p-8 text-center">
      <h2 className="text-3xl font-bold text-primary mb-4">
        Want to get in touch?
      </h2>
      <p className="text-lg mb-6">
        Feel free to send me an email or reach out via my socials!
      </p>
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="mailto:carlo.randar.aavekukk@gmail.com"
          className="bg-primary p-3 rounded-full  hover:bg-secondary transition"
          aria-label="Send an email"
        >
          <FaEnvelope className="w-6 h-6" />
        </a>

        <a
          href="https://www.linkedin.com/in/carlo-aavekukk-22b92b1b2/"
          className="bg-primary p-3 rounded-full  hover:bg-secondary transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="w-6 h-6" />
        </a>
        <a
          href="https://github.com/Teser301"
          className="bg-primary p-3 rounded-full  hover:bg-secondary transition"
          aria-label="GitHub"
        >
          <FaGithub className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default GetInTouch;
