import React from 'react'
import data from './data'
import {Link,useOutletContext} from 'react-router-dom'

function Bikes() {
const [query,setQuery] = useOutletContext()
const array = []

const inputToArray = (item) => { array.push(
  <div key={item.id} className="bikeThumbDiv">
       <Link to={`/catalog/${item.id}`}><img src={item.thumb} alt={item.id} /></Link>
       <br />
      {/* <Link to={`/catalog/${item.id}`}>{item.name}</Link> */}
      <span className='thumbName'>{item.name}</span>
      
      <span className='thumbPrice'>Starting at ${item.price.toLocaleString('en-us')}</span>
  </div>
)}

if (query===''){
for (let item of data){

inputToArray(item)
}
}
else{
const filteredArr = data.filter(el => el.id.includes(query.toLowerCase()))
for (let item of filteredArr){
  inputToArray(item)
}


}

  return (
    <div className ="bikeDisplay">
      <div className='bikeGrid'>{array}</div>
      </div>
  )
}

export default Bikes