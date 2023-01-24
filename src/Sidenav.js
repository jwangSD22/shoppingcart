import React from 'react'
import { useNavigate } from 'react-router-dom'

function Sidenav({disabled,setQuery}) {

const navigate = useNavigate()

const handleClick = (e) => {
  navigate("/catalog/allbikes")
  setQuery(e.target.textContent)
}

  return (
    <div style={disabled ? {pointerEvents: "none", opacity: "0.4", overflow:"hidden"} : {}} className='sideNav'>
      <div className='sideNavHeader'>[STREET/TRACK]</div>
      <div  className='sideNavLink' onClick={handleClick}>Ninja</div>
      <div className='sideNavHeader'>[STREET]</div>
      <div className='sideNavLink' onClick={handleClick}>Z </div>
      <div className='sideNavLink' onClick={handleClick}>Versys</div>
      <div className='sideNavLink' onClick={handleClick}>W</div>
      <div className='sideNavLink' onClick={handleClick}>Concours</div>
      <div className='sideNavLink' onClick={handleClick}>Vulcan</div>
      <div className='sideNavHeader'>[DUAL-SPORT]</div>
      <div className='sideNavLink' onClick={handleClick}>KLR</div>



    </div>
  )
}

export default Sidenav