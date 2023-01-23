import React from "react";
import { useState, useEffect } from "react";
import { v4 } from "uuid";
import ItemInCart from "./ItemInCart";



function ShoppingCart({ disabled, setDisabled, cart, setCart }) {
  const [final, setFinal] = useState([]);

  useEffect(() => {
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
  }, [cart, setCart]);

  const getPrice = () => {
    let total = 0;
    for (let item of cart) {
      total += item.price;
    }
    return total.toLocaleString("en-US");
  };





    
  

  return (
    <div className="shoppingCart" style={disabled ? {
    display:"flex"} 
    : 
    {display:"none"} }>
Your Shopping Cart
      <br></br>
      {/*CONDITIONAL RENDERING*/}
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
        <div> Your bag is empty</div>
      )}
      <div>Total - ${getPrice()}.00</div>
      <div>Proceed to payment button</div>
      <div onClick={()=>{
        const myCart = document.getElementsByClassName('shoppingCart')
        myCart[0].style.display='none'
        setDisabled(false)
              }}>Back to shop</div>
    </div>
  );
}

export default ShoppingCart

// ACCESSORY TOOL FUNCTION :: this line will map everything in the cart in list format
// easier to display what's in the cart array
{
  /* {cart.map(item=><li key={v4()}>{item.id}</li>)} */
}
