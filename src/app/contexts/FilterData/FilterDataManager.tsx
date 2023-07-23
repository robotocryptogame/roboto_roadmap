import { createContext, ReactElement, useContext, useState } from "react";
import IFilterDataManager from "./IFilterDataManager";
import { useEffect } from "react";

/**
 * Filter Date provider properties
 */
export interface FilterDataManagerProviderProps {
  children?: JSX.Element | JSX.Element[] | ReactElement | string;
}

export const FilterDataContext = createContext<IFilterDataManager>(undefined!);

/**
 * FilterData hook
 * @returns FilterData context
 */
export function useFilterData(): IFilterDataManager {
  return useContext(FilterDataContext);
}

export const FilterDataProvider = ({
  children,
}: FilterDataManagerProviderProps) => {
  const [yearSelected, setYearSelected] = useState("");
  const [monthSelected, setMonthSelected] = useState("");
  const value: IFilterDataManager = {
    year: yearSelected,
    month: monthSelected,
    updateMonth: (month) => {
      setMonthSelected(month);
    },
    updateYear: (year) => {
      setYearSelected(year);
    },
  };

  //Put ALL Types of Auths  Context
  return (
    <FilterDataContext.Provider value={value}>
      {children}
    </FilterDataContext.Provider>
  );
};
