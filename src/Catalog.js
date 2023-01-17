import React from "react";
import { Outlet } from "react-router-dom";
import {useState } from 'react'
import "./catalog.css";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Footer from "./Footer";
import Sidenav from "./Sidenav";
import ShoppingCart from "./ShoppingCart"

function Catalog() {
const [query,setQuery] = useState('')
const [cart,setCart] = useState([])
  return (
<div className="catalog">
      <Banner />
      <Navbar query={query} setQuery={setQuery} />

      <div className="mainContent">
        <Sidenav query={query} setQuery={setQuery} />
        <Outlet context={[query,setQuery]}/>
        <ShoppingCart cart={cart}/>
      </div>
      <Footer />
</div>
  );
}

export default Catalog;
