import React from "react";
import styles from "../css_modules/movielist.module.css";
import SingleMovie from "./SingleMovie";
export default function Movies({ data }) {
  return (
    <div className={styles.container}>
      {data.map((movie) => (
        <React.Fragment key={movie["#IMDB_ID"]}>
          <SingleMovie key={movie["#IMDB_ID"]} details={movie}></SingleMovie>
          <hr className={styles.line} />
        </React.Fragment>
      ))}
    </div>
  );
}
