import React from 'react'
import { useState } from 'react';
import {BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill} from 'react-icons/bs'




function RotatingImg({currentBike}) {
    let [image, setImage] = useState(0);
    let rotatingImg = <img className = 'rotatingImg' src={currentBike.imgs[image]} alt = {currentBike.id+[image]} />
  const clickIncHandler = (e)=> {
    e.stopPropagation();
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

            <button className='rotatingImgNavBtn' onClick={clickDecHandler}><BsFillArrowLeftSquareFill /> </button>
            <div></div>
            <button className='rotatingImgNavBtn' onClick={clickIncHandler}><BsFillArrowRightSquareFill /></button>
        </div>
        </div>
  )
}

export default RotatingImg