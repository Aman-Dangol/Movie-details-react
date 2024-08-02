import styles from "../css_modules/image.module.css";

export default function Image({ source }) {
  return <img src={source} className={styles.image} alt="no-image" />;
}
