import React, { useState, useContext, useEffect } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { Card, button, Modal } from "react-bootstrap";
import Layout from "../common/layout";
import { ProductsContext } from "./../../context/productsContext";
import { CartContext } from "../../context/cartContext";
import { isInCart } from "../../helpers";
import "./singleProduct.css";

const SingleProduct = ({ match, history }) => {
  const [show, setShow] = useState(false);
  let quantity = 0;
  const { products } = useContext(ProductsContext);
  const { addItem, incItem, cartItems, decItem, remItem } = useContext(
    CartContext
  );
  const { id } = match.params;
  console.log(match.params.id);
  const product = products.find((p) => Number(p.id) === Number(id));
  if (!product) return <Redirect to="/shop" />;

  try {
    const thisItem = cartItems.filter((item) => Number(item.id) === Number(id));
    quantity = thisItem === undefined ? 0 : thisItem[0].quantity;
  } catch (ex) {}

  const inCart = isInCart(product, cartItems);
  const { title, imageUrl, price, description } = product;

  return (
    <Layout>
      <div className="row">
        <div className="col-sm-12 col-md-6 product__box">
          <Card.Img
            className="product__img"
            variant="top"
            src={imageUrl}
            onClick={() => setShow(true)}
          />
          <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal"
            size="lg"
            centered
          >
            <img src={imageUrl} alt={title} />
          </Modal>

          <Card.Body>
            <Card.Title className="product__title mobile">
              <h2>{title}</h2>
            </Card.Title>
          </Card.Body>
        </div>
        <div className="col-sm-12 col-md-6 product__box">
          <Card.Body>
            <Card.Subtitle className="product__price mobile">
              <h4>Price: $ {price}</h4>
            </Card.Subtitle>

            {!inCart && <button className="product__btn add"
                onClick={() => addItem(product)} >
                 <i class="fa fa-plus"></i> </button> }

            {inCart && <button  className="product__btn add"
                onClick={() => incItem(product)} >
                <i class="fa fa-plus"></i> </button>    }
           
            {quantity > 1 && <button  className="product__btn minus"
            onClick={() => decItem(product)}> <i class="fa fa-minus"></i> </button> }

            {quantity <= 1 && <button className="product__btn disabled__btn" >
            <i class="fa fa-minus"></i> </button> }

            {quantity === 1 && <button className="product__btn del" 
            onClick={() => remItem(product)}> <i class="fa fa-times"></i> </button>}

            {quantity !== 1 && <button className=" product__btn disabled__btn">
              <i class="fa fa-times"></i> </button>}

            <div>
              <button
                className="product__btn check__out"
                onClick={() => history.push("/cart")} >
                Proceed To Checkout
              </button>
            </div>

            <Card.Text className="product__description">
              {description}
            </Card.Text>
          </Card.Body>
        </div>
      </div>
    </Layout>
  );
};

export default withRouter(SingleProduct);
