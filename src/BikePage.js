import React from "react";
import data from "./data";
import { useParams, useOutletContext } from "react-router-dom";
import { useState } from "react";
import RotatingImg from "./RotatingImg";
import { current } from "immer";

function BikePage() {
  const [query, setQuery, cart, setCart] = useOutletContext();
  const { id } = useParams();

  const increaseHandler = () => {
    setCart([...cart, currentBike]);

    //function to slide in shopping cart after adding//
  };

  let currentBike;
  for (let item of data) {
    if (item.id === id) {
      currentBike = item;
    }
  }

  return (
    <div className="bikePageDisplay">
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
                <li className="featureList" key={item.id}>
                  {item}
                </li>
              ))}
            </ul>
            <div >STARTING AT: ${currentBike.price.toLocaleString('en-us')}.00
              <br />
              <br />
            <button onClick={increaseHandler}>Add to Cart</button>
            </div>
            
          </div>


        </div>

        <br></br>
      </div>
    </div>
  );
}

export default BikePage;
