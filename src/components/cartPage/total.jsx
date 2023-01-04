import React, {useContext} from 'react';
import { withRouter } from 'react-router-dom';
import { CartContext } from "../../context/cartContext";

const Total = ({ itemCount, total, history }) => {
  const { clearCart } = useContext(CartContext);

  return (
    <div className='total__container'>
      <div className='total'>
        <span className="total__items">Total Items: {itemCount}</span>
        <span className="total__price">{`Total Price: $ ${total}`}</span>
        </div>
        <div className="buttons">
            <button className='btn__clear' onClick={() => clearCart()}>
                <span className="empty">CLEAR CART</span></button>
            <button className='btn__checkout'>CHECKOUT</button>
        </div>       
      </div>
  );
}

export default withRouter(Total);

//css in cart page