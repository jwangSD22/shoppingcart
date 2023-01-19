import React from 'react'


function ItemInCart({src,id,count,item,cart,setCart}) {
  const handleIncClick = (item) => {
    setCart([...cart,item.bike])
}

const handleDecClick = (item) => {
    let copy  = [...cart]
    let indexOfFound = copy.findIndex(el=>el.id===item.id)
    copy.splice(indexOfFound,1)
    setCart(copy)
}
  return (
    <li> <img src={src}></img> {id} - COUNT:{count} 
    <button name={id} onClick={()=>{handleIncClick(item)}}>INC</button>
    <button name={id} onClick={()=>{handleDecClick(item)}}>DEC</button> 
    </li>
  )
}

export default ItemInCart

