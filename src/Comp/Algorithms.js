import React from 'react'
import { Routes, Route, Link ,useNavigate, Outlet,useParams } from "react-router-dom"


export default function Algorithms() {

  const handleNav = (e)=>{
   
    const element = e.target
    let c = element.closest("div");

     const arrayOfBTC = c.getElementsByTagName('button')




    for (let btc of arrayOfBTC) {
      btc.className='button-space';
      console.log(btc)
      if(btc.innerHTML===e.target.innerHTML)
       btc.className='button-pressed';
      
    } 
    navigate("HeapExam")
  }


    const navigate = useNavigate()
  return (
    <div className='algo-comp' >
        <div className='algo-navigation'>

    <button  onClick={(e)=>{handleNav(e)}} className='button-space'>Heap</button>
    <button  onClick={(e)=>{handleNav(e)}} className='button-space'>Fake1</button>
    <button  onClick={(e)=>{handleNav(e)}}  className='button-space'>Fake2</button>
    <button  onClick={(e)=>{handleNav(e)}}  className='button-space'>Fake3</button>
    <button  onClick={(e)=>{handleNav(e)}}  className='button-space'>Fake4</button>
      </div>
        <div className='algo-some '>

        <Outlet/>
        </div>
    </div>
  )
}
