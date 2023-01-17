import React from 'react'
import {Link,Outlet} from 'react-router-dom'
import './catalog.css'

function Catalog({children}) {
  return (
    <>    <div className='catalog'>CATALOG ROUTE</div>
    <br></br>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/catalog/allbikes">Shop </Link>
        <Link to="">Search Query Bar </Link>
        <Link to="">Shopping Cart </Link>

    </nav>

<br></br>
    <div>
        <Outlet />
    </div>
    </>
  )
}

export default Catalog