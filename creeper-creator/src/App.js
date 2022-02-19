import React from "react";
import { CssBaseline } from "@mui/material";
import creeper from "./creeper.jpg";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={creeper} className="App-logo" alt="logo" />
        </header>
      </div>
    </>
  );
}

export default App;
