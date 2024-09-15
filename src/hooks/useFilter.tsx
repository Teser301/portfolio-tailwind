import { useContext } from "react";
import { FilterContext, FilterContextProps } from "../context/FilterContext"; // Adjust the path if necessary

// Custom hook for using the context
export const useFilter = (): FilterContextProps => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};
