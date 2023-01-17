import React from 'react'
import data from './data'
import {useParams} from 'react-router-dom'

function BikePage() {
const {id} = useParams()

let currentBike

for (let item of data){
    if (item.id===id){
        currentBike = item
    }
}


  return (
    <div>
        {currentBike.name}
        <img src={currentBike.def} alt={currentBike.id}></img>
    </div>
  )
}

export default BikePage