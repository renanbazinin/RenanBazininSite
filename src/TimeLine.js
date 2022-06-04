import React, { useState, useEffect } from 'react';
import { Timeline, Event } from "react-timeline-scribble";
import { Routes, Route, Link ,useNavigate} from "react-router-dom"


export default function TimeLine() {
    const [cursor, setCursor] = useState('auto');
    const [styleY, setStyle] = useState({color:'black'});
    const changeCursor = (e) => {
        //alert(e.target.event)
        if(e.type=="pointerover"){
        setCursor(prevState => {
            setStyle({color:'red'})
            return 'pointer';
            
        });
      }
                
      setStyle({color:'black'})
      return 'auto';
    }

    const navigate = useNavigate()
    const dataEnglish = <div className="About">
    <h1></h1>
    <Timeline>
      <Event interval={"1998"} title={"B-day"} subtitle={""}>
        Born in Israel
      </Event>
      <Event interval={"2014 – 2017"} title={"School"} subtitle={"High School Katzir"}>
        I learn in Nachshon Class, leadership class. 
        My majors was :
        <ul>
        <li>5 points Math</li>
        <li>10 points Computers</li>
        <li>5 points Computational Science</li>
        <li>5 points Physics</li>
        <li>Hackathons, Mentoring robotic team and was instructor in science summer camp for middle school</li>
        </ul>
      </Event>
      <Event interval={"2017 – 2020"} title={"Army"} subtitle={"Medic and Head of clinic"}>
        Main things in army:
        <ul>
        <li>Excellence of Medical Services Center (Prize Of Colonol) </li>
        <li>Made program for ideal human resource extraction (Made in VBA)</li>
        <li style={styleY}  onClick={()=>{navigate("/Projects")}} onPointerOver={(e)=>changeCursor(e)} onPointerOut={(e)=>{changeCursor(e)}} >Made program for writing medical records (Personal project)</li>
 
        </ul>
      </Event>
      <Event interval={"2020 – 2022"} title={"discharged from army"} subtitle={"reserve duty and coronavirus"}>
        Main things
        <ul>
        <li>Learn react and advance JavaScript in KERNELiOS  </li>
        <li>Called to reserve service for vaccinate .After also made blood test and coronavirus test</li>
        <li>Mentor a FLL team, robotic competition for middle school</li>
    
      
        </ul>
      </Event>
    </Timeline>

    </div>


  return (
    <div style={{ cursor: cursor }}>TimeLine

                {dataEnglish}


    </div>

    
  )
}
