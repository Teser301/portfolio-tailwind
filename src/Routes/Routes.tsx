import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import NotFound from "../pages/NotFound";
import Portfolio from "../pages/Portfolio";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/projects",
    element: <Portfolio />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
