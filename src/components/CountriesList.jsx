/* eslint-disable react/prop-types */

import Message from "./Message";

import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
function CountriesList({ cities, isLoading }) {
  if (isLoading) {
    return <Spinner />;
  }

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  if (!countries.length) return <Message message="Add you first city!" />;
  return (
    <ul className={styles.cityList}>
      {countries.map((country) => (
        <CountryItem city={country} key={country.id} />
      ))}
    </ul>
  );
}

export default CountriesList;
