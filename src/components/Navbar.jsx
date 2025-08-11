import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [searchProduct, setSearchProduct] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchProduct.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchProduct)}`);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">

      <Link className="navbar-brand fw-bold text-warning" to="/">
        Amazon
      </Link>

      <form className="d-flex mx-auto w-50" onSubmit={handleSearch}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search products..."
          value={searchProduct}
          onChange={(e) => setSearchProduct(e.target.value)}
        />
        <button className="btn btn-warning" type="submit">
          Search
        </button>
      </form>

      <div className="d-flex align-items-center ms-auto">
        <Link to="/cart" className="btn btn-outline-light me-2">
          <i className="bi bi-cart-fill"></i> Cart
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
