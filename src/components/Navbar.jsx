import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext, useState, useMemo } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cart);
  const products = useSelector((state) => state.products.products);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const { theme, toggleTheme } = useContext(ThemeContext);
  const [searchTerm, setSearchTerm] = useState("");

  const suggestions = useMemo(() => {
    if (!searchTerm.trim()) return [];
    return products
      .filter((p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .slice(0, 5);
  }, [searchTerm, products]);

  const handleNavigateToProduct = (product) => {
    if (!product) {
      alert("Product not found!");
      return;
    }
    setSearchTerm("");
    navigate(`/product/${product.id}`);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    const foundProduct = products.find((p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    handleNavigateToProduct(foundProduct);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 sticky-top">
      <Link className="navbar-brand fw-bold text-warning" to="/">
        Amazon
      </Link>

      <form
        className="d-flex mx-auto w-50 position-relative"
        onSubmit={handleSearchSubmit}
      >
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-warning" type="submit">
          Search
        </button>

        {suggestions.length > 0 && (
          <ul
            className="list-group position-absolute w-100 mt-5"
            style={{ zIndex: 1000 }}
          >
            {suggestions.map((item) => (
              <li
                key={item.id}
                className="list-group-item list-group-item-action"
                onClick={() => handleNavigateToProduct(item)}
                style={{ cursor: "pointer" }}
              >
                {item.title.split(" ").slice(0, 8).join(" ")}...
              </li>
            ))}
          </ul>
        )}
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

        <Link to="/login" className="btn btn-outline-light me-2">
          Login
        </Link>

        <button
          className="btn btn-outline-warning"
          onClick={toggleTheme}
          title="Toggle Theme"
        >
          {theme === "light" ? (
            <i className="bi bi-moon-fill"></i>
          ) : (
            <i className="bi bi-sun-fill"></i>
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
