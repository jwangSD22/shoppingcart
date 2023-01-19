import React from 'react'
import { useNavigate } from 'react-router-dom'

function Sidenav({setQuery}) {

const navigate = useNavigate()

const handleClick = (e) => {
  navigate("/catalog/allbikes")
  setQuery(e.target.textContent)
}

  return (
    <div>
      <div onClick={handleClick}>Ninja</div>
      <div onClick={handleClick}>Z</div>
      <div onClick={handleClick}>Versys</div>
      <div onClick={handleClick}>W</div>
      <div onClick={handleClick}>Concours</div>
      <div onClick={handleClick}>Vulcan</div>
      <div onClick={handleClick}>KLR</div>



    </div>
  )
}

export default Sidenav