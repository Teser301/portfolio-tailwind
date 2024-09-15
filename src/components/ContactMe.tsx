import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Socials from "./Social";

const GetInTouch: React.FC = () => {
  return (
    <div className="max-w-md mx-auto p-8 text-center">
      <h2 className="text-3xl font-bold text-primary mb-4">
        Want to get in touch?
      </h2>
      <p className="text-lg mb-6">
        Feel free to send me an email or reach out via my socials!
      </p>
      <div className="flex flex-col items-center space-y-4 mb-4">
        <Socials value="carlo.randar.aavekukk@gmail.com" icon={FaEnvelope} />
        <Socials value="linkedin.com/in/carlo-aavekukk" icon={FaLinkedin} />
        <Socials value="github.com/Teser301" icon={FaGithub} />
      </div>
    </div>
  );
};

export default GetInTouch;
