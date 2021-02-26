import React, { useEffect } from "react";
import { fetchData } from "./api";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";

function App() {
  // const [fetchedData, setfetchedData] = useState();

  const dataStorage = [];

  useEffect(() => {
    (async function callBackFunction() {
      const data = await fetchData();
      return dataStorage.push(data);
    })();
  });

  return (
    <div className={styles.container}>
      <Cards dataStorage={dataStorage} />
      {/* {dataStorage.map((item, index) => (
        <div key={index}>{item.confirmed}</div>
      ))} */}
      <CountryPicker />
      <Chart />
    </div>
  );
}

export default App;
