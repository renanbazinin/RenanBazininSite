import logo from './logo.svg';
import './App.css';
import RenanBazinn from './RenanBazinn';
import Projects from './Projects';
import TimeLine from  './TimeLine'
import {Nav , Navbar, NavLink,Container,NavDropdown}from 'react-bootstrap';

import React, { useState, useEffect } from 'react';
import { Routes, Route, Link ,useNavigate, Switch} from "react-router-dom"



function App() {
  
  return (
    <div className="App">
    
      <link
          rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      />
      <h1>Renan The student</h1>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href=""><img src='https://cdn.pixabay.com/photo/2016/12/17/22/06/smiley-1914523_960_720.png' style={{width:"55px"}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#/RenanBazinin">Renan Bazinin</Nav.Link>
            <Nav.Link href="#/TimeLine">Time Line</Nav.Link>
            <Nav.Link href="#/Projects">Projects</Nav.Link>
            
            {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#"></NavDropdown.Item>
              <NavDropdown.Item href="#"> </NavDropdown.Item>
              <NavDropdown.Item href="#"></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#"> </NavDropdown.Item>
            </NavDropdown>
          */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Routes>
        <Route path='/RenanBazinin' element={<RenanBazinn/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/TimeLine' element={<TimeLine/>}/>

      </Routes>
    </div>
    
  );
}

export default App;
