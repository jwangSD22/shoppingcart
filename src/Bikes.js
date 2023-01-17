import React from 'react'
import data from './data'
import {Link} from 'react-router-dom'

function Bikes() {
const array = []
for (let item of data){

    array.push(
        <div className="bikeThumbDiv">
             <Link to={`/catalog/${item.id}`}><img src={item.thumb} alt={item.id} /></Link>
            <Link to={`/catalog/${item.id}`}>{item.name}</Link>
        </div>
    )
}

  return (
    <div className ="bikeThumbCollection">{array}</div>
  )
}

export default Bikes