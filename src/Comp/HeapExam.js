import React, { useState, useEffect } from 'react';

export default function HeapExam() {

    const [stats, setStats] = useState({
     
        sizeHeap:10,
        loop:0,
        timeEnd:20,
        inervalKey:0,
        array:[],
        heap:[],
        sortedHeap:[],
        bonus:false,
    
    });
    const [heap, setHeap] = useState([])
    const [action,setAction] =useState({stat:true})

    const heapify = (arr, n, i)=>
    {
        var largest = i; // Initialize largest as root
        var l = 2 * i + 1; // left = 2*i + 1
        var r = 2 * i + 2; // right = 2*i + 2
 
        // If left child is larger than root
        if (l < n && arr[l] > arr[largest])
            largest = l;
 
        // If right child is larger than largest so far
        if (r < n && arr[r] > arr[largest])
            largest = r;
 
        // If largest is not root
        if (largest != i) {
            var swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;
 
            // Recursively heapify the affected sub-tree
            heapify(arr, n, largest);
        }
    }

    const buildHeap = (arr,n)=>
    {

        let startIdx = (n / 2) - 1;
 

        for (let i = startIdx; i >= 0; i--) {
            heapify(arr, n, i);
        }
    }

    useEffect(() => {

      }, []);

      const startRandomHeap =async()=>{
          await setStats(statsPre  => {return {...stats,array:[]}});
          for (let i=0;i<stats.sizeHeap-1;i++){
              await setStats(statsPre  => {return {...stats,array:[...statsPre.array,Math.floor(Math.random() * 10)]}});
        
          }
          await setStats(statsPre  => {return {...stats,array:[...statsPre.array,Math.floor(Math.random() * 10)]}});
          ///Now makeHeap

         // buildHeap(copyArray,copyArray.length)
          //console.log(copyArray)
      }

      const makeHeap = async()=>{
        const copyArray = [...stats.array];
        buildHeap(copyArray,copyArray.length)
        const copyHeap = [...stats.array];
        ///sort
        sortHeap(copyHeap)
        setStats({...stats,sizeHeap:copyArray.length,sortedHeap:copyHeap,heap:copyArray})
      }
      const handleChange =(e)=>{
        setStats({...stats,sizeHeap:e.target.value})
      }

      const sortHeap = (arr)=>{
        let n = arr.length
        for (let i = arr.length - 1; i >= 2; i--) {
          // Move current root to end
          var temp = arr[0];
          arr[0] = arr[i];
          arr[i] = temp;
       
          // call max heapify on the reduced heap
          heapify(arr,i,0);
      }
      
      }
    /*
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

            
            const newHeap = [...stats.heap]
            console.log(newHeap)

          }, 1000);
          

          console.log(stats.loop)
    }
  */
    const parentIndex = (i)=>{
      return Math.floor((i-1)/2)
    }
    const addHeap = async()=>{
      await setAction({stat:false})
      let copyHeap = [...stats.heap]
      let i = stats.sizeHeap+1
   
      let newPrint = Math.floor(Math.random() * 10);

      copyHeap.push(newPrint)
      while(i>=0 && newPrint > copyHeap[parentIndex(i)]){
     
        let temp = copyHeap[i]
        copyHeap[i] =  copyHeap[parentIndex(i)];
        copyHeap[parentIndex(i)] = temp;
        i = parentIndex(i)
    }

    await setStats({...stats,sizeHeap:stats.sizeHeap+1,heap:copyHeap,array:[...stats.array,newPrint]})
    await setAction({stat:true})
  }
    const removeFromHeap = async()=>{
      await setAction({stat:false})
      let copyHeap = [...stats.heap]
      let copyArray= [...stats.array]
      let max = copyHeap[0];
      copyHeap[0]=copyHeap[copyHeap.length-1]
      heapify(copyHeap,stats.sizeHeap-1,0)
      copyHeap.pop()
      for(let i=0;i<copyArray.length;i++){
        if(copyArray[i]===max)
        {
          copyArray.splice(i, 1); 
          i=copyArray.length

        }
      }
      await setStats({...stats,sizeHeap:stats.sizeHeap-1,heap:copyHeap,array:copyArray})
      
      await setAction({stat:true})
 
      
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

 
        <br/>
        Number of print orders : <input type={"number"} value={stats.sizeHeap} onChange={handleChange}/>
        <br/>       <button onClick={startRandomHeap}>Start</button>
        <br/>Our Orders:<br/>{stats.array.map((num,i)=>{
           return <span className='OfHeap' key={i}> {num} </span>
        })}
        <br/>
        {stats.array.length>0?<div>
        <button onClick={makeHeap} >Step 1 (makeHeap) :</button><br/>
        After MakeHeap:
        </div>:""}
        <br/>
        {stats.heap.map((num,i)=>{
           return <span className='OfHeap' key={i}> {num} </span>
        })}
        <br/>
        {stats.bonus?<div>
          After sortHeap,
          Bounus (sort for array):<br/>{stats.sortedHeap.map((num,i)=>{
            return <span className='OfHeap' key={i}> {num} </span>
          })}
          <br/>
        </div>:""}
          <br/><br/>
          {stats.heap.length>0?<div>
            {action.stat?<button onClick={addHeap} >Add order needed to print</button>:"Wait"}<br/>
            {action.stat?<button onClick={removeFromHeap}>Print!</button>:"Wait"}<br/>
          </div>:""}
    </div>
  )
}
