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
      <div className='bikeBannerbg'>
      <div className='bannerTitle'>{currentBike.name}</div>
      <img className='bikeBanner' src={currentBike.banner} />
      </div>
       
        <div className='bikeOverview'>{currentBike.overview}</div>
        <ul>
          {currentBike.features.map(item=>
            <li>{item}</li>)}
          </ul>
        <img src={currentBike.def} alt={currentBike.id}></img>
        <button onClick={increaseHandler}>Add to Cart</button>
        <br></br>
       
    </div>
  )
}

export default BikePage