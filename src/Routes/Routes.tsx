import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import NotFound from "../pages/NotFound";
import Portfolio from "../pages/Portfolio";
import { FilterProvider, useFilter } from "../context/FilterContext";
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
    path: "*",
    element: <NotFound />,
  },
]);
