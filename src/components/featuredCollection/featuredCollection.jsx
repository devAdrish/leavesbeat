import React, { useContext } from "react";
import FeaturedProduct from "../common/featuredProduct";
import { ProductsContext } from "./../../context/productsContext";
import "./featuredCollection.css";

const FeaturedCollection = () => {
  const detailed = true;
  const { products } = useContext(ProductsContext);
  const featuredItems = products
    .filter((p, i) => i < 4)
    .map((p) => <FeaturedProduct key={p.id} product={p} btn={false} />);
  return (
    <div className="collection">
      <h2>Featured Collection</h2>
      <div className="row">{featuredItems}</div>
    </div>
  );
};

export default FeaturedCollection;
