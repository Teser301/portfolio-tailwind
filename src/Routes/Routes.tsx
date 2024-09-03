import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import NotFound from "../pages/NotFound";
import Portfolio from "../pages/Portfolio";
import About from "../pages/AboutPage";
import { FilterProvider } from "../context/FilterContext";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/projects",
    element: (
      <FilterProvider>
        <Portfolio />
      </FilterProvider>
    ),
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
