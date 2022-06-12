import React from 'react'
import { useSelector } from "react-redux"
export default function RenanBazinn() {
  const storeData = useSelector(store => { return store })
  return (
    <div className="About" >
      {storeData.lang==="en"?"":"עוד לא כתבתי בעברית"}
        <h1>Renan Bazinin</h1>
        I'm a new student to computer science.  I have always had a passion for computers
        <h4>Points about me in this world</h4>
            <div>
            <ul>
                  <li>I studied at a program called computational science in Davidson institute and also software engineering (15 points in the Bagrut).</li>
                  <li>In high school I participated in many Hackathons - second prize in one of them</li>
                  <li>I still open to everything in this field. I like Web-Development , Algorithmics and hope to gain enough mathematical theory to explor data science world </li>
                  <li>My project in software engineering was -"Discover the author of anonymous book by data of many other books and authors" inspire by this <a className='NormalLink' href='https://languagelog.ldc.upenn.edu/nll/?p=5315'>Article</a></li>             
                  
              </ul>
        <h4>knowledge</h4>    
            <div >
                <ul>
                  <li>C# from high school (97 score in computer science)</li>
                  <li>JAVA from Open University (82 score)</li>
                  <li>Python from project in 5 Point the software engineering (100 score)</li>
                  <li>ASP.net from high school</li>
                  <li>React advanced JavaScript from kernelios (inculding Async programming and Callback function)</li>
                  <li>Excel (inculding VBA)</li>
                  <li>Hebrew-Native language</li>
                  <li>English-very good. score 142/150 in psychometry exam</li>
              </ul>
            </div>     
           
            </div>
    </div>
  )
}
