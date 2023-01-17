import React from 'react'
import {Link} from 'react-router-dom'

function Navbar({query,setQuery}) {

const onChangeHandler = (e) =>{
    setQuery(e.target.value)
}

  return (
     <nav>
    <Link to="/">Home</Link>
    <Link to="/catalog/allbikes">Shop </Link>
    <label for="search"> Search by Name</label>
    <input type='search' name="search" onChange={onChangeHandler} value={query}></input>
    <Link to="">Shopping Cart </Link>
  </nav>
  )
}

export default Navbar