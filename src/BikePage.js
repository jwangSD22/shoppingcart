import React from "react";
import data from "./data";
import { useParams, useOutletContext } from "react-router-dom";
import RotatingImg from "./RotatingImg";
import {BsFillCartPlusFill} from 'react-icons/bs'

function BikePage() {
  const [query, setQuery, cart, setCart,disabled,setDisabled] = useOutletContext();
  const { id } = useParams();

  const increaseHandler = () => {
    setCart([...cart, currentBike]);
const myCart = document.getElementsByClassName('shoppingCart')
console.log(myCart)
myCart[0].style.display = "flex"
setDisabled(true)

  }

  let currentBike;
  for (let item of data) {
    if (item.id === id) {
      currentBike = item;
    }
  }

  return (
    <div style={disabled ? {pointerEvents: "none", opacity: "0.4", overflow:"hidden"} : {}} className="bikePageDisplay">
      <div className="bikeBannerbg">
        <div className="bannerTitle">{currentBike.name}</div>
        <img className="bikeBanner" src={currentBike.banner} />
      </div>

      <div className="bikeInfo">
        <div className="bikeTop">
          <div className="bikeOverview">{currentBike.overview}</div>
          <img src={currentBike.def} alt={currentBike.id}></img>
        </div>

        <div className="bikeBottom">
        <RotatingImg currentBike={currentBike} />
          <div className="featureLeft">
            <ul>
              {currentBike.features.map((item) => (
                <li key={item} className="featureList">
                  {item}
                </li>
              ))}
            </ul>
            <div className="featureLeftCont"><h2>STARTING AT: ${currentBike.price.toLocaleString('en-us')}.00</h2>
              <br />
              <br />
            <div onClick={increaseHandler}><h3>Add to Cart <BsFillCartPlusFill /></h3></div>
            </div>
            
          </div>


        </div>

        <br></br>
      </div>
    </div>
  );
}

export default BikePage;
