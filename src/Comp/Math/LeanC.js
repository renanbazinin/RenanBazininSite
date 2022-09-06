
import React, { useState, useEffect } from 'react';
export default function LeanC() {

  const [url,setUrl] = useState("");

  const handleNav = (e)=>{
   

    const element = e.target
    let c = element.closest("div");
   const arrayOfA = c.getElementsByTagName('a')




  for (let btc of arrayOfA) {
    btc.className='';
   
    if(btc.innerHTML===e.target.innerHTML  )
     btc.className='a-pressed';
    
  } 

  setUrl(e.target.id)


}

  return (
    <div>
      <br/>
            <div class="topnav-heb" style={{"margin":"0"}} >
                  <a onClick={(e)=>{handleNav(e)}} id='https://drive.google.com/file/d/10dZjX1qrRoV9j9MxNvd4RjpEqDCGeFqu/preview'>פתח דבר ויצוג בסיסיים שונים</a>
                  <a onClick={handleNav} id ='https://drive.google.com/file/d/10msS5BBD4di_tY1OvlsP0RXRGCd_QJKN/view?usp=sharing'> לא אעשה הסבר על יסודות התכנות</a>
                  <a onClick={handleNav}  id='https://drive.google.com/file/d/10gEDOTcMjnQ_-cta4VJWXz580_8ppwmq/preview' >מגבלת הטיפוס int וייצוג מספר שלילי</a>
                  <a onClick={handleNav}  id='https://drive.google.com/file/d/10mE18Qa_SbnFndnToF_Agb9rWVggZ2Wb/preview'>  כתובות ומצביעים </a>
              </div>

      <div>
        {url.length>5?
      <iframe
        frameborder="0"
        scrolling="no"
        src={url}>


        </iframe>:""}
      </div>
    </div>
  )
}
