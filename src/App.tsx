import "./styles.css";
import { useState } from "react";
import { TextField } from "@material-ui/core";

export default function App() {
  const [text, setText] = useState("");
  return (
    <div className="App">
      <TextField value={text} onChange={(e) => setText(e.target.value)} />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h3>you typed: {text}</h3>
    </div>
  );
}
