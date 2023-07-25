import styles from "./ContentProgress.module.scss";
import { useFilterData } from "@context/FilterData/FilterDataManager";
import { useEffect, useState } from "react";

const ContentProgress = () => {
  const getNumberMonth = (month: string) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return months.indexOf(month) + 1;
  };

  const urlbase = "http://localhost:3010/getAllProgressDate/";
  const { year, month } = useFilterData();
  const [listProgress, setListProgress] = useState([]);
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const url = urlbase + year + "-" + getNumberMonth(month);
        const response = await fetch(url);
        const json = await response.json();
        if (response.status === 200) {
          setListProgress(json.body);
        } else {
          setListProgress([]);
        }
      } catch (e: any) {
        setListProgress([]);
        console.log(e);
      }
    };
    if (year && month) fetchAllData();
  }, [year, month]);
  return (
    <section className={styles.ContainerContentProgress}>
      {listProgress.length > 0 ? (
        listProgress.map((item: any, index: number) => (
          <div key={"progress" + index} className={styles.ItemProgress}>
            <fieldset>
              <legend>{item.status}</legend>
              <h2>{item.title}</h2> <br />
              <p>{item.content}</p>
              <br />
              <p>{item.progress}</p>
              <br />
              <p>{item.release}</p>
              <br />
            </fieldset>
          </div>
        ))
      ) : (
        <h1>Not Data</h1>
      )}
    </section>
  );
};

export default ContentProgress;
