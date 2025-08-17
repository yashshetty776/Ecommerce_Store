import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Search() {
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.products);
  const [search, setSearch] = useState("");
  const [notFound, setNotFound] = useState(false);

  const suggestions = useMemo(() => {
    if (!search.trim()) return [];
    return products
      .filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      )
      .slice(0, 5);
  }, [search, products]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search.trim()) return;

    const match = products.find((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );

    if (match) {
      navigate(`/product/${match.id}`);
      setSearch("");
      setNotFound(false);
    } else {
      setNotFound(true);
    }
  };

  const handleSelect = (product) => {
    navigate(`/product/${product.id}`);
    setSearch("");
    setNotFound(false);
  };

  return (
    <form
      className="d-flex mx-auto w-50 position-relative"
      onSubmit={handleSubmit}
    >
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="btn btn-warning" type="submit">
        Search
      </button>

      {suggestions.length > 0 && (
        <ul className="list-group position-absolute w-100 mt-5">
          {suggestions.map((item) => (
            <li
              key={item.id}
              className="list-group-item list-group-item-action"
              onClick={() => handleSelect(item)}
              style={{ cursor: "pointer" }}
            >
              {item.title.split(" ").slice(0, 8).join(" ")}...
            </li>
          ))}
        </ul>
      )}

      {notFound && (
        <div className="position-absolute w-100 mt-5 alert alert-danger p-2">
          No products found
        </div>
      )}
    </form>
  );
}

export default Search;
