import React, {useContext} from 'react';
import { withRouter } from "react-router-dom";
import { Card } from "react-bootstrap";
import { CartContext } from './../../context/cartContext';
import { isInCart } from './../../helpers';
import {notifyAdd, notifyInc} from './toast';
import "./featuredProduct.css";

const FeaturedProduct = (props) => {
    const {history} = props;
    const {id, title, imageUrl, price, description} = props.product;
    const product = {id, title, imageUrl, price, description}
    const {addItem, incItem, cartItems } = useContext(CartContext);
    const inCart = isInCart(product, cartItems)

    const cardClass = inCart ? "card__inCart" : "card__main";

    return (<div className="featuredproduct__card d-flex align-items-stretch col-sx-12 col-sm-6 col-md-4 col-lg-3">
    <Card className={cardClass} >
    <Card.Img className="card__img" variant="top" src={imageUrl} 
    onClick={()=> {history.push(`/shop/product/${id}`)}}/>
    <Card.Body className="card__body">
      <Card.Title className="card__title">{title}</Card.Title>
      <Card.Subtitle  className="card__price" >$ {price}</Card.Subtitle>
    </Card.Body>

    {!inCart && !props.btn && <button onClick={()=> history.push(`/shop/product/${id}`)}
    className="btn__shop">Shop Now</button>}
    
    {!inCart && props.btn && <button onClick={()=> {addItem(product); notifyAdd(title)}}
    className="btn__addcart">Add to Cart</button>}

    {inCart && <button onClick={()=> {incItem(product); notifyInc(title) } }
    className="btn__incart" >Add More</button>}

  </Card></div>  );
}
 
export default withRouter(FeaturedProduct);