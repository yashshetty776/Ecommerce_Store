import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


function Navbar() {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);


  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 sticky-top">

      <Link className="navbar-brand fw-bold text-warning" to="/">
        Amazon
      </Link>

      <form className="d-flex mx-auto w-50">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search products..."
        />
        <button className="btn btn-warning" type="submit">
          Search
        </button>
      </form>

      <div className="d-flex align-items-center ms-auto">
        <Link to="/cart" className="btn btn-outline-light me-2 position-relative">
          <i className="bi bi-cart-fill"></i> Cart
          {cartCount > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
      <div className="d-flex align-items-center ms-2">
        <Link to="/login" className="btn btn-outline-light">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
