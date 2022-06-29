import React, { useState, useEffect } from 'react';
import Induction from './Math/Calculus/Induction';

import { Routes, Route, Link ,useNavigate, Outlet,useParams } from "react-router-dom"
export default function Notebook() {

    const [password,setPassword] = useState('');

    const [mov,setMov] = useState('');

    useEffect(()=>{

        if( localStorage.getItem('enter_id') ===process.env.REACT_APP_LOG_PASS || sessionStorage.getItem('enter_id')===process.env.REACT_APP_LOG_PASS)
        {
            console.log("good")
        
            setPassword(localStorage.getItem('enter_id'))
        }
    }, [password])

    const handlPass = (e)=>{

        sessionStorage.setItem('enter_id', e.target.value);
        localStorage.setItem('enter_id', e.target.value);
        setPassword(e.target.value)
    }

    const logOut = ()=>{

        sessionStorage.setItem('enter_id', "");
        localStorage.setItem('enter_id', "");
        setPassword()
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
    <div>
        
        {
        password===process.env.REACT_APP_LOG_PASS?
        <div>Welcome
            <button onClick={logOut}>Log Out</button>

                 <div  className='StudyHebraw'>
                 <br/>
               <div class="topnav" style={{"margin":"0"}} >
                  
            <a href="#/Notebook/Calculus" className='a-pressed' onClick={handleNav}>חדו"א</a>
            <a href="#/Notebook"  onClick={handleNav}>לוגיקה ותורת הקבוצות</a>
            
            </div>

            
                
                <Outlet/>

         
                  </div>
        </div>:<div>
        Enter your password for enter
            <input type="text" onChange={(e)=>handlPass(e)} />
            </div>
    }




    </div>
  )
}
