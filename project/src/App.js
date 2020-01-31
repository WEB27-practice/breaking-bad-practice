import React from 'react';
import './App.css';

import Container from "./components/Container.js";
import Home from "./components/Home.js";
import { Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/characters">
        <Container /> 
      </Route>

      <NavLink to="/home">Home Page</NavLink>
      <NavLink to="/characters">Characters Page</NavLink>

      {/* <Home />
      <Container /> */}
    </div>
  );
}

export default App;
