import React from 'react'
import {HashRouter, Routes, Route} from 'react-router-dom'
import Splash from './Splash'
import Catalog from './Catalog'
import Bikes from './Bikes'
import BikePage from './BikePage'

function RouteSwitch() {
  
  return (
    <HashRouter>
    <Routes>
        <Route path ="/" element={<Splash />} />

        <Route path = "catalog" element={<Catalog />}>
          <Route path ="allbikes" element={<Bikes />} />
          <Route path =":id" element={<BikePage />} />

        </Route>


    </Routes>
    </HashRouter>
  )
}

export default RouteSwitch