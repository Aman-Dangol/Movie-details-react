import Header from "./components/Header";
import Form from "./components/Form";
import { useState } from "react";
function App() {
  const [data, setData] = useState("");
  return (
    <>
      <Header></Header>
      <Form setData={setData}></Form>
    </>
  );
}

export default App;
