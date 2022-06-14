
import React, { useState, useEffect } from 'react';

import axios from 'axios'


export default function GuessTheSub() {

    const [subChose, setSubChose] = useState(null);
    const [data, setData] = useState(null);

    const pullReddit =async ()=>{
      await setData(null)

        const raw = await axios.get(`https://www.reddit.com/subreddits/popular.json`)
        const subRan = (raw.data.data.children[Math.floor(Math.random() * 25)].data.display_name_prefixed)
        await setSubChose(subRan)

        
        const rawFromSub = await axios.get(`https://www.reddit.com/${subRan}/top.json?limit=10&t=week`)
        const indexRnd =Math.floor(Math.random() * 10)
        console.table(((rawFromSub.data.data.children[indexRnd])))
        if(rawFromSub.data.data.children[indexRnd].data.media !== null)
          console.log(((rawFromSub.data.data.children[indexRnd].data.media.hls_url)))
        await setData((rawFromSub.data.data.children[indexRnd]))
    }

      useEffect(() => {
         pullReddit();
     
      }, []);


  return (


    <div style={{"display":"flex" , "flexDirection":"column","justifyContent":"center","width": "100%"}}>

        <button onClick={pullReddit} style={{"width":"60%","alignSelf":"center"}}>Random</button>
        <br/>
        GuessTheSub<br/>
        {subChose!==null?subChose:"Finding you something funny"}
        <br/><br/><br/>
        {data!==null?
        <div>
        {data.data.title}
        <br/>


        {
                data.data.post_hint==="image"?
                <img src={data.data.url} width={"300px"}/>:
                  data.data.is_video?
                    <video controls width="250" autoPlay>
                      <source src={data.data.media.reddit_video.fallback_url}  type="video/mp4" height="100px"/>
                    </video>:data.data.url_overridden_by_dest!=null?
                 
                    <a href={data.data.url_overridden_by_dest}>Link!</a>
                    :data.data.selftext.length>1?<div>{data.data.selftext}</div>:
                    "He didn't write "
                    
                    }

        </div>:
        "Finding you something funny"}

    </div>
  )
}
