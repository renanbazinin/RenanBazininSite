
import React, { useState, useEffect } from 'react';

import axios from 'axios'


export default function ReddiAPIFUN() {
    const [data, setData] = useState([]);

    const pullReddit =async ()=>{
        const raw = await axios.get(`https://www.reddit.com/r/ani_bm/top.json?limit=10&t=week`)
        await setData((raw.data.data.children))
        console.table((raw.data.data.children[9].data))
    }

      useEffect(() => {
         pullReddit();
     
      }, []);

  return (
    <div>
        <h1>Top 10 ani_bm subreddit</h1>
        <br/>
        {
            
           data.map((kid,i) => {
                return <div>
                    
                    <h4>Place {i+1}: {kid.data.title}</h4>
                    <br/>
                    {kid.data.is_video?<video controls="" autoplay="" name="media">
                    <source src={kid.data.secure_media.reddit_video.scrubber_media_url} type="video/mp4"/>
                    </video>:<img src={kid.data.url} width={"200px"}/>}
                    
                    <br/>
                    </div>
           })
        
        }


    </div>
  )
}
