import { createContext, FC, ReactElement, useContext, useState } from "react";
import IFilterDataManager from "./IFilterDataManager";
import { useEffect } from "react";

/**
 * Filter Date provider properties
 */
export interface FilterDataManagerProviderProps {
  children?: JSX.Element | JSX.Element[] | ReactElement | string;
}

export const FilerDataContext = createContext<IFilterDataManager>(undefined!);

/**
 * FilterData hook
 * @returns FilterData context
 */
export function useFilterData(): IFilterDataManager {
  return useContext(FilerDataContext);
}

export const FilterDataProvider = ({
  children,
}: FilterDataManagerProviderProps) => {
  const [yearSelected, setYearSelected] = useState(0);
  const [monthSelected, setMonthSelected] = useState(0);
  const value: IFilterDataManager = {
    year: yearSelected,
    month: monthSelected,
    updateMonth: (payload) => {
      setMonthSelected(payload.month);
    },
    updateYear: (payload) => {
      setYearSelected(payload.year);
    },
  };

  //Put ALL Types of Auths  Context
  return (
    <FilerDataContext.Provider value={value}>
      {children}
    </FilerDataContext.Provider>
  );
};
