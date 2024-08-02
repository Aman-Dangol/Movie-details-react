import styles from "../css_modules/form.module.css";
import { useState } from "react";

export default function Form() {
  const [input, setInput] = useState("");
  function btnClick(e) {
    e.preventDefault();
  }
  function inputUpdate(e) {
    setInput(e.target.value);
    console.log(e.target.value);
  }
  return (
    <form>
      <input
        type="text"
        onChange={(e) => {
          inputUpdate(e);
        }}
        value={input}
        name="query"
        placeholder="enter detail about movie"
      />
      <button
        type="submit"
        onClick={(e) => {
          btnClick(e);
        }}
      >
        {" "}
        Search
      </button>
    </form>
  );
}
