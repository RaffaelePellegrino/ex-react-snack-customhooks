import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import useSwitch from "./useSwitch";
import useDate from "./useDate";
import useCustomPointer from "./useCustomPointer";
import "./App.css";

function App() {
  const [isOn, toggle] = useSwitch();
  const date = useDate();
  const customPointer = useCustomPointer(<span>@</span>);
  return (
    <>
      <h1>il valore è {isOn ? "ON" : "OFF"}</h1>
      <button onClick={toggle}>{isOn ? "OFF" : "ON"}</button>

      <h2>{date.toLocaleString()}</h2>
      {customPointer}
    </>
  );
}

export default App;
