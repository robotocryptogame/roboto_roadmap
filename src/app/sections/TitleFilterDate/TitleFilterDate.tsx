import styles from "./TitleFilterDate.module.scss";
import { useEffect, useState } from "react";
import { useFilterData } from "@context/FilterData/FilterDataManager";

const TitleFilterDate = () => {
  const url = "http://localhost:3010/availableDates";
  const [listDates, setListDates] = useState<any>(null);
  const { year, month, updateMonth, updateYear } = useFilterData();

  useEffect(() => {
    const fetchDates = async () => {
      const response = await fetch(url);
      const json = await response.json();
      const data = json[0];
      updateYear(data.years[data.years.length - 1]);
      updateMonth(data.month[data.years[data.years.length - 1]][11]);
      setListDates(data);
    };
    fetchDates();
  }, []);
  return (
    <section className={styles.ContainerFilter}>
      <div className={styles.YearSectionFilter}>
        {listDates &&
          listDates?.years.map((yearItem: string, index: number) => (
            <button
              onClick={() => updateYear(yearItem)}
              data-focus={yearItem === year ? "selected" : "none"}
              key={"year" + index}
            >
              {yearItem}
            </button>
          ))}
      </div>
      <div className={styles.MonthSectionFilter}>
        {year &&
          listDates &&
          listDates?.month[year].map((monthItem: string, index: number) => (
            <button
              onClick={() => updateMonth(monthItem)}
              data-focus={monthItem === month ? "selected" : "none"}
              key={"month" + index}
            >
              {monthItem}
            </button>
          ))}
      </div>
    </section>
  );
};

export default TitleFilterDate;
