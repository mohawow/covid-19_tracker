import { CountryPicker } from "../../components";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();

  const handleCountryChange = country => {
    history.push(`/${country}`);
  };

  return <CountryPicker onChange={handleCountryChange} />;
}
