import React from "react";

function HiddenDiv({ disabled, setDisabled }) {
  const clickHandler = ()=>{
    setDisabled(false)
  }
  return (
    <div
      className="hiddenDiv"
      style={
        disabled?{display:'flex'}:{display:'none'} 
          
      }
      onClick={clickHandler}
    >

    </div>
  );
}

export default HiddenDiv;
