import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-backgroundPrimary">
      <h1 className="text-9xl font-bold ">404</h1>
      <p className="mt-4 text-xl ">
        Oops! The page you're looking for hasn't been made yet.
      </p>
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
