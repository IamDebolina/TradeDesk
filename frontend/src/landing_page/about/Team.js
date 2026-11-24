import React from 'react'

function Team() {
  return (
   <div className='container mt-5'>
    <h1 className='text-center '>People</h1>
    <div className='row'>
      <div className='col-6 p-5 text-center'>
        <img src='media/images/nithinKamath.jpg' style={{borderRadius:"100%" , width:"60%"}}/>
        <h4 className='mb-3 mt-3 fs-4'>Nithin Kamath</h4>
        <h5 className='fs-5 text-muted'>Founder, CEO</h5>
      </div>
      
      
      <div className='col-6 p-5 fs-5'><p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

<p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

<p>Playing basketball is his zen.</p>

<p>Connect on Homepage / TradingQnA / Twitter</p></div>
    </div>
   </div>
  )
}

export default Team
