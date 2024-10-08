import React from "react";
import Button from "../Basic/Button";
import Me from "/assets/img/me.jpg";
const AboutMe: React.FC = () => {
  return (
    <div className="md:p-24">
      <div className="z-10 flex flex-col md:flex-row items-center justify-center">
        <img
          src={Me}
          alt="Carlo Aavekukk"
          className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-lg mb-6 md:mb-0 md:mr-8"
        />
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold text-primary mb-6">About Me</h1>
          <p className="text-2xl text-primary mb-4">
            Hi, I'm <span className="font-semibold">Carlo Aavekukk</span>, a
            passionate Front-End Developer.
          </p>
          <p className="text-lg mb-8">
            I have been a developer for over 5+ years, focusing on front-end
            development with expertise in technologies like React, PHP, and
            modern CSS frameworks. I enjoy coding and all its technicalities and
            problem solving, making the job extremely enjoyable for myself.
          </p>
          <Button text="Learn More About Me" href="/about" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
