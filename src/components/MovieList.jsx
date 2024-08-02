import styles from "../css_modules/movielist.module.css";
import SingleMovie from "./SingleMovie";
export default function Movies({ data }) {
  return (
    <div className={styles.container}>
      {data.map((movie) => (
        <>
          <SingleMovie key={movie["#IMDB_ID"]} details={movie}></SingleMovie>
          <hr className={styles.line} />
        </>
      ))}
    </div>
  );
}
