import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/products/productActions";
import { addToCart } from "../../redux/cart/cartActions";
import Loader from "../Loading/Loader";

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  const product = products.find((p) => String(p.id) === String(id));

  const requireLogin = (callback) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      alert("Please login first!");
      navigate("/login");
      return;
    }
    callback();
  };

  const handleAddToCart = () => requireLogin(() => dispatch(addToCart(product)));
  const handleBuy = () =>
    requireLogin(() => {
      dispatch(addToCart(product));
      navigate("/checkout");
    });

  const renderStars = (rating) => {
    if (!rating) return "";
    const numericRating = parseFloat(rating);
    const stars = Math.round(numericRating);
    return "⭐".repeat(stars) + "☆".repeat(5 - stars);
  };

  if (loading) {
    return <Loader />;
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

          <p className="mt-2">
            {renderStars(product.rating)}({product.reviews} reviews)
          </p>

          <div className="mt-4">
            <button
              className="btn btn-primary btn-lg me-3"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <button className="btn btn-warning btn-lg" onClick={handleBuy}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
