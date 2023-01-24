import React, { useEffect } from "react";
import data from "./data";
import { useParams, useOutletContext } from "react-router-dom";
import RotatingImg from "./RotatingImg";
import {BsFillCartPlusFill} from 'react-icons/bs'
import { AnimationOnScroll } from "react-animation-on-scroll";
import 'animate.css'
function BikePage() {
  const [query, setQuery, cart, setCart,disabled,setDisabled] = useOutletContext();
  const { id } = useParams();

  useEffect(()=>{
    window.scrollTo(0, 0);
  })

  const increaseHandler = () => {

    setCart([...cart, currentBike]);
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
       
        <div className={`bannerTitle`}>{currentBike.name}</div>
        
        <img className="bikeBanner" src={currentBike.banner} />
      </div>

      <div className="bikeInfo">
        <div className="bikeTop">
          <div className="bikeOverview">{currentBike.overview}</div>
          <img src={currentBike.def} alt={currentBike.id}></img>
        </div>

        <div className="bikeBottom">
        <AnimationOnScroll animateIn="animate__fadeIn"><RotatingImg currentBike={currentBike} /></AnimationOnScroll>
        
          <div className="featureLeft">
            <ul>
              {currentBike.features.map((item) => (
               
                 <AnimationOnScroll animateIn="animate__fadeInLeft"> <li key={item} className="featureList">{item}</li></AnimationOnScroll> 
            
              ))}
            </ul>
            <AnimationOnScroll animateIn="animate__fadeInLeft">
            <div className="featureLeftCont"><h2>STARTING AT: ${currentBike.price.toLocaleString('en-us')}.00</h2>
              <br />
              <br />
            <div className="bikePageATC" onClick={increaseHandler}><h3>Add to Cart <BsFillCartPlusFill /></h3></div>
            </div>
            </AnimationOnScroll>
            
          </div>


        </div>

        <br></br>
      </div>
    </div>
  );
}

export default BikePage;
