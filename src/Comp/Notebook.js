import React, { useState, useEffect } from 'react';

export default function Notebook() {

    const [password,setPassword] = useState('');


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
  return (
    <div>
        
        {
        password===process.env.REACT_APP_LOG_PASS?
        <div>Welcome
            <button onClick={logOut}>Log Out</button>

                 <div  >
                 Subjects    <br/>
                 אינדוקציה 
                 <br/>  <br/>  <br/>
                 <video controls width="800" autoPlay>
                      <source src="https://185-229-191-160.servers.tips:9092/vod2/POMfTxSzQNr3E0pgYyQuUw/188178/1656463021/1eceecbae267683548c950279f0475ea.mp4"  type="video/mp4" height="100px"/>
                    </video>
                  <br/>
                  <br/>  <br/>
                  <iframe
                    frameborder="0"
                    scrolling="no"

                    src="https://drive.google.com/file/d/1-kk7vGWF6sNMawKnhDGZCxyKjmJFO6eq/preview"
                   
                    >
                    </iframe>

         
                  </div>
        </div>:<div>
        Enter your password for enter
            <input type="text" onChange={(e)=>handlPass(e)} />
            </div>
    }




    </div>
  )
}
