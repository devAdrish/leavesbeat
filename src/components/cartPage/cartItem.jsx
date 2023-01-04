import React, { useContext } from "react";
import { withRouter } from 'react-router-dom';
import { MinusCircleIcon, PlusCircleIcon, TrashIcon } from "./icons";
import { CartContext } from "../../context/cartContext";
import { Button } from "react-bootstrap";
import "./cartItem.css";

const CartItem = ({product, history}) => {
  const { id, title, price, imageUrl, quantity } = product;
  const { incItem, decItem, remItem } = useContext(CartContext);
 
  return (
    <div className="cart__item">
      <div>
        <img src={imageUrl} className="cart__img" onClick={()=> history.push(`/shop/product/${id}`)} />
      </div>
      <div className="cart__info">
        <h4>{title}</h4>
        <h6>Price: $ {price}</h6>
        <h6>Quantity: {quantity}</h6>
      </div>
      <div className="cartitem__buttons">
        <Button
          className="cart__btn"
          variant="warning"
          onClick={() => incItem(product)}>
          <PlusCircleIcon width="24px" />
        </Button>
        {quantity > 1 && (
          <Button className="cart__btn" variant="danger" onClick={() => decItem(product)}>
            <MinusCircleIcon width="24px" />
          </Button>
        )}
        {quantity === 1 && (
          <Button className="cart__btn" variant="dark" onClick={() => remItem(product)}>
            <TrashIcon width="24px" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default withRouter(CartItem);
