import React from "react";

interface RecommendationCardProps {
  image: string;
  name: string;
  title: string;
  quote: string;
  year: string;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({
  image,
  name,
  title,
  quote,
  year,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center border border-gray-300 dark:border-gray-700 rounded-lg p-8 bg-white dark:bg-gray-800 shadow-lg max-w-4xl mx-auto">
      <div className="flex-shrink-0">
        <img
          src={image}
          alt={name}
          className="rounded-full w-32 h-32 object-cover mr-0 md:mr-8 mb-6 md:mb-0"
        />
      </div>
      <div className="flex flex-col w-full">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          {name}
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-300">{title}</p>
        <p className="text-xl italic text-gray-700 dark:text-gray-400 my-4">
          "{quote}"
        </p>
        <p className="text-lg text-gray-500 dark:text-gray-400 text-right">
          {year}
        </p>
      </div>
    </div>
  );
};

export default RecommendationCard;
