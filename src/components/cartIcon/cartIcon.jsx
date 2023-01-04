import React, { useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import { CartContext } from "../../context/cartContext.jsx";
import shoppingCart from "../../assets/bag.svg";
import "./cartIcon.css";

const CartIcon = () => {
  const { itemCount, cartItems } = useContext(CartContext);
  // console.log("cart items: ", cartItems);
 return (
     <Link to="/cart" className="nav__cartIcon">
      <div className="cartIcon" >
        <img src={shoppingCart} className="cartIcon__img" />
        {itemCount >= 1 && <span className="cartIcon__count"> {itemCount} </span>}
        <span className="cartIcon__mobile"> {itemCount}</span>
      </div>
    </Link>

  );
};

export default withRouter(CartIcon);
