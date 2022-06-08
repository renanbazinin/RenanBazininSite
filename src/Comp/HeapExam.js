import React, { useState, useEffect } from 'react';

export default function HeapExam() {

    const [stats, setStats] = useState({
        loop:0,
        timeEnd:20,
        inervalKey:0,
        heap:[]
    
    });
    const [heap, setHeap] = useState([])
        


    
    useEffect(() => {

      }, []);


    const stopInterval =()=> 
    {
        clearInterval(stats.inervalKey)
    }
    
    const startInterval =async ()=>{
        let newTime
        const interval = setInterval(async() => {
 
        



            await setTimeout(async() => {

                await setStats(statsPre  => {return {...stats,loop:statsPre.loop+1,inervalKey:interval,heap:[...statsPre.heap,Math.floor(Math.random() * 10)]}}); 
                console.log(stats.loop)
                await setHeap(array =>[...array,34]);               
            }, 1000);

            


          }, 1000);
          

          console.log(stats.loop)
    }


  return (
    <div className='About'>
        We have one printer. But, many computers.
        <br/>
        Every computer has different priority. 
        <br/>From 1 to 10.<br/>
        10 - Highest priority
        <br/>
        1 - lowest priority
        <br/>
        Every 1.5 second the printer is printing. <br/>
        Every 1 second we got new job
        <br/>
        After 20 seconds stop
        <br/><br/><br/>
        Time: {stats.loop}<br/><br/>
        <button onClick={startInterval}>Start</button>
        <br/>
        <button onClick={stopInterval}>Stop</button>

        <br/>Our Orders:<br/>{stats.heap.map((num)=>{
           return <span className='OfHeap'>num , </span>
        })}

    </div>
  )
}
