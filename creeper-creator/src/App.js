import React from "react";
import creeper from "./creeper.jpg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Button, AppBar, TableFooter } from "@material-ui/core";
// import AppBar from "../src/components";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <AppBar id="bar" position="static">
          Create your creeper!
          <div id="desc">
            An app where you can delve into the nether and create your own
            creeper character
            <img src={creeper} className="App-logo" alt="logo" />
          </div>
          {/* <Button color="inherit" id="home">
            Home
          </Button> */}
        </AppBar>
        <header className="App-header">
          <Button id="enter" variant="contained">
            Enter the Nether
          </Button>
          <TableFooter>
            <img src="https://th.bing.com/th/id/R.c58b4b3e04ecde74b4edfc0614f4571c?rik=vKcOkWk2lPXODw&riu=http%3a%2f%2fstatic.planetminecraft.com%2ffiles%2fresource_media%2fscreenshot%2f1323%2f2013-06-07_160611_5645849_lrg.jpg&ehk=JTo%2bb9cFDM6JBHsMhoERWVZCtQZ%2fM2CAe6gRra0GUcA%3d&risl=&pid=ImgRaw&r=0" id="endermen"/>
          </TableFooter>
        </header>
      </div>
    </>
  );
}

export default App;
