import React, { useEffect, useState } from "react";
import { fetchData } from "./api";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import useAsyncEffect from "use-async-effect";

function App() {
  const [data, setData] = useState();

  // useEffect(() => {
  //   (async () => {
  //     const dataFromApi = await fetchData();
  //     setData(dataFromApi);
  //   })();
  // }, []);

  useAsyncEffect(async () => {
    const dataFromApi = await fetchData();
    setData(dataFromApi);
  }, []);

  if (!data) return "Loading...";

  return (
    <div className={styles.container}>
      <Cards {...data} />
      <CountryPicker />
      <Chart />
    </div>
  );
}

export default App;
