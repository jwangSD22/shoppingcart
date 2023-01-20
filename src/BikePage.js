import React from 'react'
import data from './data'
import {useParams,useOutletContext} from 'react-router-dom'
import { current } from 'immer'

function BikePage() {
const [query,setQuery, cart,setCart] = useOutletContext()
const {id} = useParams()

const increaseHandler = ()=>{
setCart([...cart,currentBike])

//function to slide in shopping cart after adding//
}




let currentBike
for (let item of data){
    if (item.id===id){
        currentBike = item
    }
}





  return (
    <div className="bikeDisplay">
        {currentBike.name}
        <div>{currentBike.overview}</div>
        <ul>
          {currentBike.features.map(item=>
            <li>{item}</li>)}
          </ul>
        <img src={currentBike.def} alt={currentBike.id}></img>
        <button onClick={increaseHandler}>Add to Cart</button>
    </div>
  )
}

export default BikePage