import React from "react";
import { Link } from "react-router-dom";
import Heading from "../components/Basic/Heading";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-backgroundPrimary">
      <Heading
        tag="h1"
        tagClassNames="text-9xl font-bold"
        text="404"
        subheading="Oops! The page you're looking for hasn't been made yet."
        subClassNames="mt-4 text-xl "
      />
      <Link
        to="/"
        className="mt-6 px-4 py-2 rounded bg-primary text-light transition"
      >
        Go back to the homepage
      </Link>
    </div>
  );
};

export default NotFound;
