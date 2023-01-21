import React from 'react'
import {Link,useNavigate} from 'react-router-dom'

function Navbar({setDisabled,query,setQuery}) {

const navigate = useNavigate()

const onChangeHandler = (e) =>{

  navigate("/catalog/allbikes")
    setQuery(e.target.value)
}

  return (
     <nav>
    <Link to="/">Home</Link>
    <Link to="/catalog/allbikes" onClick={()=>{setQuery('')}}>Shop</Link>
    <label htmlFor="search"> Search by Name</label>
    <input type='search' name="search" onChange={onChangeHandler} value={query}></input>
    <div className='navCartBtn' onClick={()=>{setDisabled(true)}}>Shopping Cart</div>
  </nav>
  )
}

export default Navbar