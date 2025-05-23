import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import useSwitch from "./useSwitch";
import "./App.css";

function App() {
  const [isOn, toggle] = useSwitch();

  return (
    <>
      <h1>il valore è {isOn ? "ON" : "OFF"}</h1>
      <button onClick={toggle}>{isOn ? "OFF" : "ON"}</button>
    </>
  );
}

export default App;
