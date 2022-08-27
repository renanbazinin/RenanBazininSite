import React from 'react'

export default function LeanC() {
  const handleNav = (e)=>{
   

    const element = e.target
    let c = element.closest("div");
   const arrayOfA = c.getElementsByTagName('a')




  for (let btc of arrayOfA) {
    btc.className='';
   
    if(btc.innerHTML===e.target.innerHTML  )
     btc.className='a-pressed';
    
  } 
 
}

  return (
    <div>
      <br/>
            <div class="topnav-heb" style={{"margin":"0"}} >
                  <a onClick={handleNav}>כלום1</a>
                  <a onClick={handleNav}>כלום 2 </a>
              </div>

    </div>
  )
}
