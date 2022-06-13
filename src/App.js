import logo from './logo.svg';
import './App.css';
import RenanBazinn from './RenanBazinn';
import Projects from './Projects';
import TimeLine from  './TimeLine'
import Stream from './Comp/Stream';
import HeapExam from './Comp/HeapExam'
import Algorithms from './Comp/Algorithms';
import ReddiAPIFUN from './Comp/ReddiAPIFUN'
import GuessTheSub from './Comp/GuessTheSub'

import {Nav , Navbar, NavLink,Container,NavDropdown}from 'react-bootstrap';

import React, { useState, useEffect } from 'react';
import { Routes, Route, Link ,useNavigate, Switch,useParams } from "react-router-dom"

import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux';




function App() {




  const dispatch = useDispatch();
  const [lang,setLang] = useState('he');


  const toggleLang = (e)=>{

      if("English" === e.target.value)
        setLang("en")
      else
        setLang("he")
      const langForRedux = e.target.value.toUpperCase()

        dispatch({type:langForRedux})
  }


  return (
    <div className="App" >
    
      <link
          rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      />
      <h1>Renan The student</h1>
      <Navbar bg="light" expand="lg" >
      <Container >
        <Navbar.Brand href="#/RenanBazinin"><img src='https://cdn.pixabay.com/photo/2016/12/17/22/06/smiley-1914523_960_720.png' style={{width:"55px"}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
       
    
         
            
            <NavDropdown title="About Me" id="basic-nav-dropdown">
              <NavDropdown.Item href="#/RenanBazinin">Renan Bazinin</NavDropdown.Item>
              <NavDropdown.Item href="#/TimeLine">Time Line</NavDropdown.Item>
              {/*
              <NavDropdown.Item href="#"></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#"> </NavDropdown.Item>
              */}
            </NavDropdown>
            <Nav.Link href="#/Projects">Projects</Nav.Link>
         

            {///Random stuff
            }
              <NavDropdown  title="Random For Practice Stuff" id="basic-nav-dropdown">
              <NavDropdown.Item href="#/ReddiAPIFUN">Reddit API</NavDropdown.Item>
              <NavDropdown.Item href="#/GuessTheSub">Guess The Subreddit</NavDropdown.Item>
            </NavDropdown>


           <Nav.Link href="#/Algorithms" style={{"marginLeft":"100%"}}>אלגוריתמים</Nav.Link>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 

    <div className='About'>
        
        <select onChange={(e)=>{toggleLang(e)}}>
          <option defaultValue >English</option>
          <option>Hebraw</option>
          </select>
        </div>
     
        <br/>
      <Routes >
        <Route path='/' element={<RenanBazinn  />}/>
        <Route path='/RenanBazinin/' element={<RenanBazinn/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/TimeLine' element={<TimeLine />}/>
        <Route path='/Stream' element={<Stream/>}/>
        <Route path='/Algorithms' element={<Algorithms/>}>
          <Route path="HeapExam" element={<HeapExam />} />
   

        </Route>
        <Route path='/ReddiAPIFUN' element={<ReddiAPIFUN/>}/>
        <Route path='/GuessTheSub' element={<GuessTheSub/>}/>

    
      </Routes>

      <footer>
      Email: <a href = "mailto: renanbazinin2@gmail.com">renanbazinin2@gmail.com</a>

        
      </footer>
    </div>
    
  );
}

export default App;
