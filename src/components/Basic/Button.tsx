import React from "react";
import { ButtonProps } from "../../types/button";

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  href,
  target = "_self",
  className = "",
}) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={`inline-block bg-primary hover:bg-secondary text-light font-bold py-2 px-4 rounded hover:no-underline ${className}`}
      >
        {text}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`bg-primary hover:bg-secondary text-light font-bold py-2 px-4 rounded no-underline ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
