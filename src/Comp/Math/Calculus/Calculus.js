import React from 'react'
import { Routes, Route, Link ,useNavigate, Outlet,useParams } from "react-router-dom"
export default function () {
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
    <div>
        <h4>חדו"א</h4>
                <div class="topnav-heb" style={{"margin":"0"}} >
                  
                  <a href="#/Notebook/Calculus" onClick={handleNav} >הקדמה</a>
                  <a href="#/Notebook/Calculus/Induction" onClick={handleNav}>אינדוקציה</a>
                 
                  </div>
                  <Outlet/>
    </div>
  )
}
