import React from 'react'

function LeftSection( {imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
  return (
   <div className='container mt-5 mb-5 '>
    <div className='row '>
      <div className='col-6 ' >
        <img  style={{width:"100%"}}src={imageURL}/>
      </div>
        <div className='col-6 p-5'>
          <h1>{productName}</h1>
          <p>{productDescription}</p>

         <div className='mb-4 '> <a   style={{textDecoration:"none", marginRight:"50px"}} href={tryDemo}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
         
          <a  style={{textDecoration:"none"}} href={learnMore}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></div>
          
          <div><a  style={{marginRight:"10px"}}href={googlePlay}><img src="media/images/googlePlayBadge.svg" /></a>
          <a href={appStore}><img src="media/images/appstoreBadge.svg"  /></a></div>
        </div>
    </div>
   
   </div>
  )
}

export default LeftSection
