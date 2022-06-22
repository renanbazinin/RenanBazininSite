import React, { useState, useEffect } from 'react';

export default function Notebook() {

    const [password,setPassword] = useState('');


    useEffect(()=>{
        alert("first")
        if(sessionStorage.getItem('enter_id')===process.env.REACT_APP_LOG_PASS)
        {
            console.log("good")
            setPassword(sessionStorage.getItem('enter_id'))
        }
    }, [password])

    const handlPass = (e)=>{

        sessionStorage.setItem('enter_id', e.target.value);
        localStorage.setItem('enter_id', e.target.value);
        setPassword(e.target.value)
    }

    const logOut = ()=>{

        sessionStorage.setItem('enter_id', "");
        setPassword()
    }
  return (
    <div>
        
        {
        password===process.env.REACT_APP_LOG_PASS?
        <div>Welcome
            <button onClick={logOut}>Log Out</button>
        </div>:<div>
        Enter your password for enter
            <input type="text" onChange={(e)=>handlPass(e)} />
            </div>
    }




    </div>
  )
}
