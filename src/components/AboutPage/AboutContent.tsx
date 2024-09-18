import React from "react";

interface AboutcontentProps {
  title?: string;
  imgSrc?: string;
  description: string;
}

const Aboutcontent: React.FC<AboutcontentProps> = ({
  title = null,
  imgSrc = null,
  description,
}) => {
  return (
    <section className="text-text pt-6 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto bg-backgroundPrimary shadow-md rounded-lg overflow-hidden">
        {/* Image on top */}
        <div className="flex flex-col items-center p-6">
          {imgSrc && (
            <img
              src={imgSrc}
              alt={title || "Profile Image"}
              className="rounded-full w-56 h-56 md:w-72 md:h-72 object-cover mb-6"
            />
          )}
          <h2 className="text-4xl font-semibold text-primary mb-4">{title}</h2>
          <p className="leading-relaxed text-center px-4">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default Aboutcontent;
