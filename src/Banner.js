import React from 'react'
import banner from './images/banner_small3.jpg'


function Banner({disabled}) {
  return (
    <div style={disabled ? {pointerEvents: "none", opacity: "0.4", overflow:"hidden"} : {}} className='bannerDiv'><img className='banner' src={banner} /></div>
  )
}

export default Banner