import Image from "./Image";
import MovieDetails from "./Details";
import styles from "../css_modules/singlemovie.module.css";
export default function SingleMovie({ details }) {
  return (
    <div className={styles.container}>
      <Image source={details["#IMG_POSTER"]}></Image>
      <MovieDetails title={details["#TITLE"]} year={details["#YEAR"]}></MovieDetails>
    </div>
  );
}
