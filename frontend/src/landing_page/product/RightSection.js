import React from 'react'

function RightSection({productName, productDescription, learnMore, imageURL}) {
  return (
    
    <div className='container mb-5'>
      <div className='row p-5'>
        <div className='col-6 p-4'>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div><a  style={{textDecoration:"none"}}href={learnMore}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></div>
        </div>
        
        
        <div className='col-6'>
          <img style={{width:"110%"}} src={imageURL} />
        </div>
      </div>
    </div>
  )
}

export default RightSection
