import React from "react";

interface HeadingProps {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text: string;
  subheading?: string;
}

const heading: React.FC<HeadingProps> = ({ tag: Tag, text, subheading }) => {
  return (
    <div className="text-center">
      <Tag className="text-3xl font-extrabold text-primary text-center my-8 ">
        {text}
      </Tag>
      {subheading && <p className="text-center mb-6">{subheading}</p>}
    </div>
  );
};

export default heading;
