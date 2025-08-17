import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext, useState, useMemo } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Search from "./Search";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.cart);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 sticky-top">
      <Link className="navbar-brand fw-bold text-warning" to="/">
        ECommerce
      </Link>

      <Search />

      <div className="d-flex align-items-center ms-auto flex-nowrap">
        <Link to="/cart" className="btn btn-outline-light me-2 position-relative">
          <i className="bi bi-cart-fill"></i> Cart
          {cartCount > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cartCount}
            </span>
          )}
        </Link>

        <Link to="/login" className="btn btn-outline-light me-2">
          Login
        </Link>

        <button
          className="btn btn-outline-warning"
          onClick={toggleTheme}
          title="Toggle Theme"
        >
          <i className={`bi ${theme === "light" ? "bi-moon-fill" : "bi-sun-fill"}`} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;