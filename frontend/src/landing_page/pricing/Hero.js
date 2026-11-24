import React from 'react'

function Hero() {
  return (
 <div className='container p-5 mt-5 text-center '>
  <div className='row border-bottom'>
    <h1 className='mb-4'>Pricing</h1>
    <p className='mb-5 fs-4'>Free equity investments and flat ₹20 traday and F&O trades</p>
  </div>
  <div className='row mt-5 p-5'>
    <div className='col-4'>
      <img style={{width:"80%"}}src="media/images/pricingEquity.svg"/>
      <h3 className='mt-4'>Free equity delivery</h3>
      <p className='mt-3 fs-5'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
    </div>

    <div className='col-4'>
     <img style={{width:"80%"}}src="media/images/intradayTrades.svg"/>
     <h3 className='mt-4'>Intraday and F&O trades</h3>
      <p className='mt-3 fs-5'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
    </div>

    <div className='col-4'>
      
      <img style={{width:"80%"}}src="media/images/pricingEquity.svg"/>
      <h3 className='mt-4'>Free direct MF</h3>
      <p className='mt-3 fs-5'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
    </div>
  </div>
 </div>
  )
}

export default Hero
