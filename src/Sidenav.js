import React from 'react'
import { useNavigate } from 'react-router-dom'

function Sidenav({setQuery}) {

const navigate = useNavigate()

const handleClick = (e) => {
  navigate("/catalog/allbikes")
  setQuery(e.target.textContent)
}

  return (
    <div className='sideNav'>
      <div className='sideNavHeader'><h3>[STREET/TRACK]</h3></div>
      <div  className='sideNavLink' onClick={handleClick}>Ninja</div>
      <div className='sideNavHeader'><h3>[STREET]</h3></div>
      <div className='sideNavLink' onClick={handleClick}>Z </div>
      <div className='sideNavLink' onClick={handleClick}>Versys</div>
      <div className='sideNavLink' onClick={handleClick}>W</div>
      <div className='sideNavLink' onClick={handleClick}>Concours</div>
      <div className='sideNavLink' onClick={handleClick}>Vulcan</div>
      <div className='sideNavHeader'><h3>[DUAL-SPORT]</h3></div>
      <div className='sideNavLink' onClick={handleClick}>KLR</div>



    </div>
  )
}

export default Sidenav