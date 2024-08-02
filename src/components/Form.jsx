import styles from "../css_modules/form.module.css";
import { useState } from "react";

export default function Form({ setData }) {
  const [input, setInput] = useState("");
  async function btnClick(e) {
    e.preventDefault();
    let response = await fetch(`https://search.imdbot.workers.dev/?q=${input}`);
    const data = await response.json();
    setData(data);
  }
  function inputUpdate(e) {
    setInput(e.target.value);
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
