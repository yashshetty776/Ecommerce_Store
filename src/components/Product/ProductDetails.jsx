import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/products/productActions";
import { addToCart } from "../../redux/cart/cartActions";

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts()); // Fetch all products only if not loaded
    }
  }, [dispatch, products.length]);

  const product = products.find((p) => String(p.id) === String(id));

  if (loading) {
    return <h2 className="text-center mt-5">Loading...</h2>;
  }

  if (error) {
    return <h2 className="text-center mt-5 text-danger">{error}</h2>;
  }

  if (!product) {
    return <h2 className="text-center mt-5">Product not found</h2>;
  }

  return (
    <div className="container my-5">
      <div className="row g-4">
        <div className="col-md-6 text-center">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid shadow-sm"
            style={{
              maxHeight: "500px",
              objectFit: "contain",
              backgroundColor: "#fff",
              padding: "10px",
              borderRadius: "8px",
            }}
          />
        </div>

        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p className="text-muted">{product.category}</p>
          <h4 className="text-danger mb-3">₹{product.price}</h4>
          <p>{product.description}</p>
          <div className="mt-4">
            <button
              className="btn btn-primary btn-lg me-3"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>
            <button className="btn btn-warning btn-lg">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
