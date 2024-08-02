import Header from "./components/Header";
import Form from "./components/Form";
import Movies from "./components/MovieList";
import { useState } from "react";
function App() {
  const [data, setData] = useState("");
  return (
    <>
      <Header></Header>
      <Form setData={setData}></Form>
      {data ? <Movies data={data.description}></Movies> : ""}
    </>
  );
}

export default App;
