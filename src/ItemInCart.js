import React from "react";
import { HiPlusSm, HiMinusSm } from "react-icons/hi";

function ItemInCart({ src, id, count, item, cart, setCart }) {
  const handleIncClick = (item) => {
    setCart([...cart, item.bike]);
  };

  const handleDecClick = (item) => {
    let copy = [...cart];
    let indexOfFound = copy.findIndex((el) => el.id === item.id);
    copy.splice(indexOfFound, 1);
    setCart(copy);
  };

  const removeAll = (item) => {
    let copy = [...cart];


    let filtered = copy.filter(el=>el.id !== item.id);
    setCart(filtered);
  }
  return (
    <div className="itemInCart">

      <div className="cartLeft">

      <img className="cartThumb" src={src}></img> 
    <div className="cartLeftInfo">
      <div className="cartBikeName">{item.name}</div>
    <div className="cartIncDec">
       
        <div className="cartBtn"
          name={id}
          onClick={() => {
            handleDecClick(item);
          }}
        >
          <HiMinusSm />
        </div>
        <div className="incdecCounter">{count}</div>
        <div
        className="cartBtn"
          name={id}
          onClick={() => {
            handleIncClick(item);
          }}
        >
          <HiPlusSm />
        </div>
      </div>
      
      <div className='removeAllBtn' onClick={()=>{removeAll(item)}} >Delete Item</div>
    </div>

      </div>
      <div className="cartRight">
        ${item.price.toLocaleString('en-us')}
      </div>

    </div>
  );
}

export default ItemInCart;
