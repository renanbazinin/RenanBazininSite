import React, { useState, useEffect } from 'react';
import { Routes, Route, Link ,useNavigate} from "react-router-dom"
import './App.css';

import { useSelector } from "react-redux"

import { useDispatch } from 'react-redux';

export default function Projects() {
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch({type:"CHANGE-SEC",payload:"Projects"})
  }, []);

  const storeData = useSelector(store => { return store })
    const navigate = useNavigate()
  return (
      
    <div  style={{"backgroundColor":"#1A1A1B","marginLeft":"10%","marginRight":"10%"}}>
        {storeData.lang==="en"?"":"עוד לא כתבתי בעברית"}
        <h1>Projects</h1>
    <br/>
        <h5>Anamenztron</h5>
        <img src='https://renanbazinin.github.io/Anamnezatron1/images/anamnaz1high.png' style={{width:"100px"}}/>
        <div  className='About' >
        <strong>short:</strong> Helping the user to write medical record quickly and more efficient. Anamenztron = Anamnesis + tron 
        <br/>
        <strong>Story:</strong> This is very special project in my heart.<br/>
        Back in 2019, I was in the army. I was a medic and stationed in a big clinic.
         On a normal day I encountered at least 50 patients. Because of many legal laws in medical care,
          I need to record many elaborate medical terms. This was so exhausting. Like 90% of the cases were with similar patterns.
           I knew Web programming languages and had an idea to make life easy.
            But the problem with the army is that you can't import web environment without hell. And I was only  a medic. So I did it with pure vanilla JavaScript.
            Wrote in notepad++.
         
        </div>
        <button onClick={()=>{window.open(
          'https://renanbazinin.github.io/Anamnezatron1/',
          '_blank' );}}>Go To Site</button>
        <br/>  <br/>
        <h5>FullStack Course , From KERNELiOS </h5>
        <div  className='About' >
   
        <strong>short:</strong> Site destined to manager who runs movie-rental store (like BlockBuster)
        <br/>
        <strong>Story: </strong>
          After I discharged from the army I got free course in fullstack. I learn advance JavaScript , React and NoSQL (using mongo).
          <br/>
            guess user:<br/>
            username:renan<br/>
            password:123<br/>
            Because in heroku the _id is changing I temporarily gave all other user that will create all premissions.  So don't create new users. Only create/edit members (subscribers) . Also you can edit/add movies.
        </div>
        <button onClick={()=>{window.open('https://github.com/renanbazinin/FinalFullStack-Movies-managage/','_blank');}}>Go To GitHub</button>

        <button onClick={()=>{window.open('https://renanbazinin.github.io/Cinema-management/','_blank');}}>Go To Stie</button>
    </div>
    
  )
}
