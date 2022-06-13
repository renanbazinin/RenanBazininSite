
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
        console.table(((rawFromSub.data.data.children[Math.floor(Math.random() * 10)])))
        await setData((rawFromSub.data.data.children[Math.floor(Math.random() * 10)]))
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
        {data.data.is_video?<video controls="" autoplay="" name="media">
        <source src={data.data.secure_media.reddit_video.scrubber_media_url} type="video/mp4"/>
        </video>:<img src={data.data.url} width={"700px"}/>}
        </div>:
        "Finding you something funny"}

    </div>
  )
}
