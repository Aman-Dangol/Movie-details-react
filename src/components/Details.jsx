import styles from "../css_modules/details.module.css";
export default function MovieDetails({ title, year }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.header}> {title}</h3>
      <h4 className={styles.header}> {year}</h4>
    </div>
  );
}
