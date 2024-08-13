import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/projects",
    element: <h1>Lets go</h1>,
  },
]);
