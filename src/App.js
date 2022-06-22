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
import Guess from './Comp/Guess'
import Notebook from './Comp/Notebook';

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

  const handleNav = (e)=>{
   

      const element = e.target
      let c = element.closest("div");
     const arrayOfA = c.getElementsByTagName('a')




    for (let btc of arrayOfA) {
      btc.className='';
      console.log(btc)
      if(btc.innerHTML===e.target.innerHTML)
       btc.className='a-pressed';
      
    } 
   
  }
  return (
    <div className="App" >
    
      <link
          rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      />
      <h1>Renan The Student <a href="#/RenanBazinin" > <img src='https://i.imgur.com/Eb5gEmq.png' style={{width:"30px"}}/></a></h1>
     
      <div className='About'>
        
        <select onChange={(e)=>{toggleLang(e)}}>
          <option defaultValue >English</option>
          <option>עברית</option>
          </select>
        </div>
      <div class="topnav">
        <a href="#/RenanBazinin" onClick={handleNav}> About Me</a>
        <a href="#/Projects"  onClick={handleNav}>Projects</a>
        <a href="#/Guess"  onClick={handleNav}>Guess The Sub (Reddit)</a>
        <a href="#/ReddiAPIFUN"  onClick={handleNav}>Top 10 (Reddit)</a>
        <a href="#/Notebook" onClick={handleNav}>המחברת של רנן</a>
        
      </div>
      

   


     
    
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

        <Route path='/Guess' element={<Guess/>}/>
        <Route path='/Notebook' element={<Notebook/>}/>
        
    
      </Routes>

      <footer>
      Email: <a href = "mailto: renanbazinin2@gmail.com">renanbazinin2@gmail.com</a>

        
      </footer>
    </div>
    
  );
}

export default App;
