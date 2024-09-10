// Context responsible for the filters on portfolio page
import React, { useContext, createContext, useState, ReactNode } from "react";

interface FilterContextProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  activeViewOption: string;
  setActiveViewOption: (option: string) => void;
}

const FilterContext = createContext<FilterContextProps | undefined>(undefined);

const FilterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Filter #1. What work is it.
  const [activeFilter, setActiveFilter] = useState<string>("All");
  // Filter #2. Sort by year or company
  const [activeViewOption, setActiveViewOption] = useState<string>("Year");
  return (
    <FilterContext.Provider
      value={{
        activeFilter,
        setActiveFilter,
        activeViewOption,
        setActiveViewOption,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
// Custom hook for using the context
export const useFilter = (): FilterContextProps => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};
export { FilterContext, FilterProvider };
