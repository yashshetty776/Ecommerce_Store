import React from "react";
import { Link } from "react-router-dom";

const ProductCard = React.memo(function ProductCard({ product }) {

  return (
    <div className="card h-100">
      <Link
        to={`/product/${product.id}`}
        className="text-decoration-none text-dark"
      >
        <img
          src={product.image}
          alt={product.title}
          className="card-img-top bg-white p-2"
          style={{ height: "200px", objectFit: "contain" }}
        />
        <div className="card-body">
          <h5 className="card-title text-truncate">{product.title}</h5>
          <p className="card-text fw-bold">₹{product.price}</p>
        </div>
      </Link>
    </div>
  );
});

export default ProductCard;
