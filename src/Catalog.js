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
const [disabled,setDisabled] = useState('')



  return (
<div className="catalog">
  <div className="topSticky">
  <Banner disabled={disabled}/>
      <Navbar cart = {cart} disabled={disabled} setDisabled={setDisabled} query={query} setQuery={setQuery} />

  </div>

      <div className="mainContent">
        <Sidenav disabled = {disabled} query={query} setQuery={setQuery} />
        <Outlet context={[query,setQuery,cart,setCart,disabled,setDisabled]}/>
        <ShoppingCart disabled={disabled} setDisabled={setDisabled} cart={cart} setCart={setCart}/>
      </div>
      <Footer />
</div>
  );
}

export default Catalog;
