/* eslint-disable react/prop-types */

import styles from "./CountryItem.module.css";

function CountryItem({ city }) {
  return (
    <li className={styles.countryItem}>
      <span>{city.emoji}</span>
      <span>{city.country}</span>
    </li>
  );
}

export default CountryItem;
