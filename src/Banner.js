import React from 'react'
import banner from './images/banner.jpeg'
import bannerCont from './images/banner_cont.jpeg'

function Banner() {
  return (
    <div className='bannerDiv'><img className='banner' src={banner} /><img className='banner' src={bannerCont} /></div>
  )
}

export default Banner