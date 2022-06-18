import React from 'react'
import { Routes, Route, Link ,useNavigate} from "react-router-dom"
import './App.css';

import { useSelector } from "react-redux"


export default function Projects() {
  const storeData = useSelector(store => { return store })
    const navigate = useNavigate()
  return (
      
    <div  style={{"backgroundColor":"#1A1A1B","marginLeft":"20%","marginRight":"20%"}}>
        {storeData.lang==="en"?"":"עוד לא כתבתי בעברית"}
        <h1>Projects</h1>
    <br/>
        <h5>Anamenztron</h5>
        <img src='https://renanbazinin.github.io/Anamnezatron1/images/anamnaz1high.png' style={{width:"100px"}}/>
        <div  className='About' >
        <strong>short:</strong> Helping the user to write medical record quickly and more efficient. Anamenztron = Anamnesis + tron 
        <br/>
        <strong>Story:</strong> This is very special project in my heart.<br/>
        Back in 2019 I was in the army. I was medic and stationed in big clinic. In normal day I encountered atleast 50 patients.
        Because many legal laws in medical care I need to record many elaborate medical terms. This was so exhausting.
        Like 90% of the cases were with similar pattrens. I knew Web programming languages and had an idea to make life easy. 
        But the problem with the army is that you can't import web environment without hell. And I was only medic. So I did it with pure vanilla JavaScript. Wrote in notepad++.
         
        </div>
        <button onClick={()=>{window.location.href = 'https://renanbazinin.github.io/Anamnezatron1/';}}>Go To Site</button>
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
        <button onClick={()=>{window.location.href = 'https://github.com/renanbazinin/FinalFullStack-Movies-managage/';}}>Go To GitHub</button>

        <button onClick={()=>{window.location.href = 'https://renanbazinin.github.io/Cinema-management/';}}>Go To Stie</button>
    </div>
    
  )
}
