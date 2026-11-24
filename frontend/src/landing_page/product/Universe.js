import React from 'react'

function Universe() {
  return (
  <div className='container text-center mt-5'>
    <div className='row'>
      <p className='mb-5 fs-3'>Want to know more about our technology stack? Check out the <a style={{textDecoration:"none"}} href="">Zerodha.tech</a> blog.</p>

      <h1 className='mt-5'>The Zerodha Universe</h1>

      <h4  className='mt-4 text-muted'>Extend your trading and investment experience even further with our partner platforms</h4>

      <div className='col-4 p-4 mt-5'>
        <img src="media/images/smallcaseLogo.png"/>
        <p className='text-muted'>
Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs.</p>
      </div>

      <div className='col-4 p-4 mt-5'>
        <img style={{width:"50%"}} src="media/images/streakLogo.png"/>
        <p className='text-muted'>Systematic trading platform
that allows you to create and backtest
strategies without coding.</p>
      </div>

      <div className='col-4 p-4 mt-5'>
        <img  style={{width:"60%"}} src="media/images/sensibullLogo.svg"/>
        <p className='text-muted'>Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.</p>
      </div>
       <div className='col-4 p-4 mt-5'>
        <img src="media/images/smallcaseLogo.png"/>
        <p className='text-muted'>
Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs.</p>
      </div>

      <div className='col-4 p-4 mt-5'>
        <img style={{width:"50%"}} src="media/images/streakLogo.png"/>
        <p className='text-muted'>Systematic trading platform
that allows you to create and backtest
strategies without coding.</p>
      </div>

      <div className='col-4 p-4 mt-5'>
        <img style={{width:"60%"}} src="media/images/sensibullLogo.svg"/>
        <p className='text-muted'>Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.</p>

 
      </div>

    </div>
    <button
          className="p-2 btn btn-primary fs-5 mb-5 mt-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up for free
        </button>

  </div>
  )
}

export default Universe
