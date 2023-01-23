import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";

function Navbar({ cart, disabled, setDisabled, query, setQuery }) {
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    navigate("/catalog/allbikes");
    setQuery(e.target.value);
  };

  return (
    <nav
      style={
        disabled
          ? { pointerEvents: "none", opacity: "0.4", overflow: "hidden" }
          : {}
      }
    >
      <div className="navLeft">
      <Link to="/">Home</Link>
      <Link
        to="/catalog/allbikes"
        onClick={() => {
          setQuery("");
        }}
      >
        Shop
      </Link>
      </div>
     
     <div className="navRight">
     <div>
        <span>Search by name:</span>
        <input
          className="navInput"
          type="search"
          name="search"
          onChange={onChangeHandler}
          value={query}
        />
      </div>

      <div
        className="navCartBtn"
        onClick={() => {
          setDisabled(true);
        }}
      >
        Shopping Cart <div style={cart.length>0?{display:'flex'}:{display:'none'}} className="cartCounter">{cart.length}</div>
        <div className="cartIcon">
          <BsFillCartFill />
        </div>
      </div>
     </div>

    </nav>
  );
}

export default Navbar;
