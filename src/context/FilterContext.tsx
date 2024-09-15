// FilterProvider.tsx
import React, { createContext, useState, ReactNode } from "react";

export interface FilterContextProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  activeViewOption: string;
  setActiveViewOption: (option: string) => void;
}

export const FilterContext = createContext<FilterContextProps | undefined>(
  undefined
);

export const FilterProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
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
