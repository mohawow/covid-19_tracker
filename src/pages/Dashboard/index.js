import { useState } from "react";
import { fetchData } from "../../api";
import { Cards } from "../../components";
import useAsyncEffect from "use-async-effect";
import { Link, useParams } from "react-router-dom";

export default function Dashboard() {
  const [data, setData] = useState();
  const { country } = useParams();

  useAsyncEffect(async () => {
    const dataFromApi = await fetchData(country);
    setData(dataFromApi);
  }, []);

  if (!data) return "Loading...";

  return (
    <>
      <Link to="/">Go home</Link>
      <Cards {...data} />
      {/*<Chart country={country} />*/}
    </>
  );
}
