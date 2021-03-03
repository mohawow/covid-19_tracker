import axios from "axios";

const baseUrl = "https://covid19.mathdro.id/api";
const countryUrl = "https://covid19.mathdro.id/api/countries/";

export const fetchData = async country => {
  try {
    const url = country ? countryUrl + country : baseUrl;
    // SAME AS:
    // let url;
    // if (country) {
    //   url = countryUrl + country;
    // } else {
    //   url = baseUrl;
    // }

    const { data } = await axios.get(url);
    const { confirmed, recovered, deaths, lastUpdate } = data;

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {}
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries }
    } = await axios.get(`${baseUrl}/countries`);
    return countries.map(country => country.name);
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/daily`);

    const modifiedData = data.map(dailyData => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate
    }));

    return modifiedData;
  } catch (error) {}
};
