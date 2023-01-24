import React from "react";
import { useState, useEffect } from "react";
import { v4 } from "uuid";
import ItemInCart from "./ItemInCart";
import { HiX } from "react-icons/hi";
import { RiShoppingBagLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import 'animate.css'

function ShoppingCart({ disabled, setDisabled, cart, setCart }) {
  const [final, setFinal] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const element = document.querySelector('.shoppingCart')
    element.classList.add('animate__animated', 'animate__fadeInRight')
    let finalCart = [];
    for (let item of cart) {
      if (!finalCart.find((el) => el.id === item.id)) {
        finalCart = [
          ...finalCart,
          {
            id: item.id,
            name: item.name,
            price: item.price,
            count: 1,
            thumb: item.thumb,
            bike: item,
          },
        ];
      } else if (finalCart.find((el) => el.id === item.id)) {
        let copy = [...finalCart];
        let found = copy.find((el) => el.id === item.id);
        found.count += 1;
        finalCart = copy;
      }
    }
    setFinal(finalCart);
  }, [disabled,cart, setCart]);

  const getPrice = () => {
    let total = 0;
    for (let item of cart) {
      total += item.price;
    }
    return total.toLocaleString("en-US");
  };

  return (
   
    <div
      className='shoppingCart'
      style={
        disabled
          ? {
              display: "flex",
            }
          : { display: "none" }
      }
    >
      <div className="cartHeader">
        <div>YOUR SHOPPING CART</div>
        <div className="xbutton"
          onClick={() => {
            const myCart = document.getElementsByClassName("shoppingCart");
            myCart[0].style.display = "none";
            setDisabled(false);
            navigate("/catalog/allbikes");
          }}
        >
          <HiX />
        </div>
      </div>

      {cart.length > 0 ? (
        final.map((item) => (
          <ItemInCart
            key={v4()}
            src={item.thumb}
            id={item.id}
            count={item.count}
            item={item}
            cart={cart}
            setCart={setCart}
          />
        ))
      ) : (
        <div className="emptyBag">
          <span>Your bag is empty.</span>{" "}
          <div className="emptyLogo"><RiShoppingBagLine style={{fontSize:"20em",opacity:'25%'}}/></div>
          
        <div
          onClick={() => {
            const myCart = document.getElementsByClassName("shoppingCart");
            myCart[0].style.display = "none";
            setDisabled(false);
            navigate("/catalog/allbikes");

          }}
          className="checkout"
        >
          RETURN TO SHOP
        </div>
      
        </div>
      )}

      {cart.length > 0 ? (
        <>
          <div className="subtotal">Subtotal - ${getPrice()}.00</div>
          <div className="checkout">CHECKOUT</div>
        </>
      ) : null}
    </div>

  );
}

export default ShoppingCart;

// ACCESSORY TOOL FUNCTION :: this line will map everything in the cart in list format
// easier to display what's in the cart array
{
  /* {cart.map(item=><li key={v4()}>{item.id}</li>)} */
}
