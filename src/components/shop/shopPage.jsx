import React, { useContext } from "react";
import Layout from "../common/layout";
import FeaturedProduct from "../common/featuredProduct";
import { ProductsContext } from "./../../context/productsContext";
import "./shopPage.css";

const ShopPage = () => {
  const { products } = useContext(ProductsContext);
  const allProducts = products.map((p) => (
    <FeaturedProduct key={p.id} btn={true} product={p} />
  ));
  return (
    <Layout>
       <div className="shop">
        <h2>Shop</h2>
        <div className="row"> {allProducts} </div>
      </div>
    </Layout>
  );
};

export default ShopPage;
