
import React, { useState, useEffect } from 'react';

import axios from 'axios'


export default function ReddiAPIFUN() {
    const [data, setData] = useState(null);
    const [memes, setMemes] = useState(null);
    const pullReddit =async ()=>{
      await setData(null)
        await setMemes(null)
        const raw = await axios.get(`https://www.reddit.com/r/ani_bm/top.json?limit=10&t=week`)
        await setData((raw.data.data.children))

        console.table((raw.data.data.children[9].data))
        console.log("Is video? " + raw.data.data.children[9].data.selftext_html)
    }

      useEffect(() => {
         pullReddit();
     
      }, []);

    const randomPost = async()=>{
        await setData(null)
        await setMemes("yes")
        const raw = await axios.get(`https://www.reddit.com/r/rickandmorty/top.json?limit=10&t=week`)
        await setData((raw.data.data.children))
        console.table((raw.data.data.children[9].data))

      }
  return (
    <div>

    <button onClick={randomPost}>RickAndMory Subreddit </button>OR 
    <button onClick={pullReddit}> Ani_bm Subreddit</button>
      {memes===null? <h1>Top 10 ani_bm subreddit</h1>:<h1>Top 10 RickAndMory subreddit</h1>}
        
        <br/>
        {data!=null?
            
           data.map((kid,i) => {
                return <div key={i}>
                    <br/>
                    <h4>Place {i+1}: {kid.data.title}</h4>
                    <br/>
                    {kid.data.is_video===true?<video autoPlay name="media" width={"500px"}>
                    <source src={kid.data.media.reddit_video.fallback_url} type="video/mp4"/>
                    </video>:kid.data.selftext.length>1?<div>{kid.data.selftext_html}</div>:kid.data.post_hint==="image"?
                    <img src={kid.data.url} width={"300px"}/>:"shit"}
                    
                    <br/>
                    </div>
           })
        
        :<h1>Reload Fun From Reddit</h1>}


    </div>
  )
}
