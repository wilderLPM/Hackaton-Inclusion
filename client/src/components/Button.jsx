/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

export default function Button({ text1, text2, isLink, link }) {
  return isLink ? (
    <Link to={link} className={styles.button}>
      {text1}
      <br />
      <p>{text2}</p>
    </Link>
  ) : (
    <button type="button" className={styles.button}>
      {text1}
      <br />
      {text2}
    </button>
  );
}
