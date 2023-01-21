import React from 'react'
import { useState } from 'react';



function RotatingImg({currentBike}) {
    let [image, setImage] = useState(0);
    let rotatingImg = <img className = 'rotatingImg' src={currentBike.imgs[image]} alt = {currentBike.id+[image]} />
  const clickIncHandler = ()=> {
    if(image===2){
        setImage(0)
    }
    else{setImage(image+1)}
     }
     const clickDecHandler = ()=> {
        if(image===0){
            setImage(2)
        }
        else{setImage(image-1)}
         }

    return (
  
    <div className='rotatingImgContainer'>
        
        {rotatingImg}

        <div className='rotatingImgNav'>

            <div className='rotatingImgNavBtn' onClick={clickDecHandler}>Previous Button</div>
            <div>O</div>
            <div className='rotatingImgNavBtn' onClick={clickIncHandler}>Next Button</div>
        </div>
        </div>
  )
}

export default RotatingImg