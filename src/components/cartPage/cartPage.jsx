import React, {useContext} from 'react';
import Layout from './../common/layout';
import { CartContext } from "../../context/cartContext";
import Total from './total';
import CartItem from './cartItem';
import './cartPage.css';

const CartPage = () => {
    const {cartItems, total, itemCount} = useContext(CartContext)
    const cartTotal = {total, itemCount}
    const allItems = cartItems.map( (i) => <CartItem product={i} key={i.id}/> )
     return ( 
        <Layout>
            <div className="cart__page">
                <h1>Cart</h1>
                        {
                cartItems.length === 0 ? <h4>Your Cart is Empty</h4> :
                <div className="cart__items">{allItems}</div> }
            </div>
            <Total {...cartTotal}/>
        </Layout>
     );
}
 
export default CartPage;