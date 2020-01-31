import React from 'react';
import './App.css';

import { Route, NavLink } from "react-router-dom";
import styled from "styled-components";

import Container from "./components/Container.js";
import Home from "./components/Home.js";

const Wrapper = styled.div`
  margin: auto 0;
  display: flex;
  flex-direction: column;
  background-color: skyblue;
`;

const Header = styled.div`
  margin: auto 0;
  padding: 2rem;
  display: flex;
  justify-content: space-between;

`;

const Pages = styled(NavLink)`
  text-decoration: none;
  padding-left: 5%;
  padding-right: 5%;
  color: rgba(0, 0, 0, 1);
  &:hover {
    color: rgba(254, 219, 113, 0.8);
    text-shadow: 10px 10px rgba(0,0,0,1);
  }
`;





function App() {
  return (
    <Wrapper>
      <Header>
        <Pages to="/home" >Home Page</Pages>
        <Pages to="/characters">Characters Page</Pages>
      </Header>
      
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/characters">
        <Container /> 
      </Route>
    </Wrapper>
  );
}

export default App;
