import React from 'react'
import { Routes, Route, Link ,useNavigate, Outlet,useParams } from "react-router-dom"


export default function Algorithms() {

    const navigate = useNavigate()
  return (
    <div className='algo-comp' >
        <div className='algo-navigation'>

    <button  onClick={()=>{navigate("HeapExam")}} className='button-space'>Heap</button>
    <button  onClick={()=>{navigate("HeapExam")}} className='button-space'>Fake1</button>
    <button  onClick={()=>{navigate("HeapExam")}} className='button-space'>Fake1</button>
    <button  onClick={()=>{navigate("HeapExam")}} className='button-space'>Fake1</button>
    <button  onClick={()=>{navigate("HeapExam")}} className='button-space'>Fake1</button>
      </div>
        <div className='algo-some '>

        <Outlet/>
        </div>
    </div>
  )
}
