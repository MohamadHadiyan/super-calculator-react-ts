import React from "react";
import "./App.css";
import Display from "./components/Display";
import Keyboards from "./components/Keyboards";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Display />
      <Navbar />
      <Keyboards />
    </div>
  );
}

export default App;
