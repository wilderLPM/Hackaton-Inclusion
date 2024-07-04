/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

export default function Button({ text, isLink, link }) {
  return isLink ? (
    <Link to={link} className={styles.button}>
      {text}
    </Link>
  ) : (
    <button type="button" className={styles.button}>
      {text}
    </button>
  );
}
