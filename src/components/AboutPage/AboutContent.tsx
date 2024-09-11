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
    <div className="max-w-[1440px] my-5 w-full bg-backgroundPrimary shadow-lg rounded-lg p-8">
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
        {imgSrc && (
          <div className="flex-shrink-0">
            <div className="w-40 h-40 md:w-52 md:h-52 overflow-hidden border-4 border-gray-200 dark:border-gray-700">
              <img
                src={imgSrc}
                alt={title || "Profile Image"}
                className="w-full h-full object-cover transform transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>
        )}

        <div>
          {title && (
            <h3 className="text-3xl font-extrabold text-primary mb-4">
              {title}
            </h3>
          )}
          <p className="text-lg leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Aboutcontent;
