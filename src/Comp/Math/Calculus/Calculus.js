import React, { useState, useEffect } from 'react';
import { Routes, Route, Link ,useNavigate, Outlet,useParams } from "react-router-dom"

export default function () {

  
  const [isGen,setIsGen] = useState();


    const handleNav = (e)=>{
      setIsGen(false)

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
    const toggleCon = ()=>{
      
        setIsGen(!isGen)
    }
    useEffect(()=>{
      if(document.URL.split("/")[document.URL.split("/").length-1]==="Calculus")
          setIsGen(true)
    }, [])

  return (
    <div>
        <h4>חדו"א</h4>
        <a onClick={toggleCon}>Toggle table of contents </a>
        <br/>
        {isGen?
                <iframe style={{"width":"500px","height":"350px"}} frameborder="0" scrolling="no"
                 src="https://onedrive.live.com/embed?resid=155E1FB3363D181A%212723&authkey=%21AAIa80yzIamDfow&em=2&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True&edesNext=false&ejss=false">
                </iframe>:
                ""}

                <div class="topnav-heb" style={{"margin":"0"}} >
                  
                  <a href="#/Notebook/Calculus/FirstThingsCal" onClick={handleNav} >הקדמה</a>
                  <a href="#/Notebook/Calculus/Induction" onClick={handleNav}>אינדוקציה</a>
                  <a href="#/Notebook/Calculus/InequalityOfArithmetic" onClick={handleNav}>אי שיווין הממוצעים  </a>
                  <a href="#/Notebook/Calculus/SubDense" onClick={handleNav}> צפיפות תת-קבוצה  </a>
                
                  </div>
                
                  <Outlet/>
    </div>
  )
}
