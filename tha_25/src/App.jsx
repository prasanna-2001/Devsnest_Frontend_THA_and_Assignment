import React, { usestate, useContext } from "react";
// import { useArray, useUnSplashPhotos } from "./useArray";
// import { NamesContext } from "../../store";

import "./style.css"
// import Card from "react-bootstrap/Card"
// import Button from 'react-bootstrap/Button';

import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import SlideComponent from "./slideComponent"
import AlertComponent from "./AlertComponent";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
  
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <SlideComponent className="sliding"></SlideComponent>
  <AlertComponent></AlertComponent>
</div>


  );
}

export default App;
