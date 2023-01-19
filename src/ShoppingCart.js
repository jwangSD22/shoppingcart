import React from 'react'
import {useState,useEffect} from 'react'
import {v4} from 'uuid'


//right now, the useeffect hook is picking up any changes in the cart to create a whole BRAND NEW ARRAY every single time there is a change. 

//would it make more sense to create a function that generates components <ITEM IN CART /> that accepts props for all the necessities  such as price name, etc, 
// and the component could hold count in state on it's own individual component

// this way, we wouldn't have to create this new state for FINAL, seems kinda redundant.

function ShoppingCart({cart,setCart}) {

const[final,setFinal]=useState([])
    


useEffect(()=>{
    let finalCart = []
for(let item of cart){
if(!finalCart.find(el=>el.id===item.id)){
    finalCart = ([...finalCart,{
    'id':item.id,
    'name':item.name,
    'price':item.price,
    'count':1,
    'thumb':item.thumb,
    'bike':item
    }])


 }
    else if(finalCart.find(el=>el.id===item.id))
    {
        let copy = [...finalCart]
        let found = copy.find(el=>el.id===item.id)
        found.count+=1
        finalCart = copy
    }
}
setFinal(finalCart)

},[cart,setCart])

const getPrice = () => {
    let total = 0
    for(let item of cart){
        total += item.price
    }
return total.toLocaleString('en-US');
}

const handleIncClick = (item) => {
    console.log('click INC registered')
    setCart([...cart,item.bike])
}

const handleDecClick = (item) => {
    console.log('click DEC registered')
    let copy  = [...cart]
    let indexOfFound = copy.findIndex(el=>el.id===item.id)
    copy.splice(indexOfFound,1)
    console.log(copy)
    setCart(copy)
}

return (
    <div>
        SHOPPING CART HERE
        <br></br>
    {cart.map(item=><li key={v4()}>{item.id}</li>)}

    <span>BOOTYBOOTYBOOTYBOOTYBOOTYBOOTYBOOTY</span>

    {final.map(item=>
   
    <li key={v4()}> <img src={item.thumb}></img> {item.id} - COUNT:{item.count} 
    <button name={item.id} onClick={()=>{handleIncClick(item)}}>INC</button>
    <button name={item.id} onClick={()=>{handleDecClick(item)}}>DEC</button>

    
    </li>)}


    <div>Price- ${getPrice()}.00</div>
    </div>
  )
}

export default ShoppingCart