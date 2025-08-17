import { useEffect, useState, } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../../redux/products/productActions";
import Loader from "../Loading/Loader";

function ProductGrid() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  const [categoryFilter, setCategoryFilter] = useState("All");
  const [maxPrice, setMaxPrice] = useState(100000);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <Loader />
  }
  if (error) return <h2 className="text-center my-5 text-danger">{error}</h2>;

  const categories = ["All", "laptop", "headphones", "mobiles", "shoes", "bagpacks", "smartwatches"];

  return (
    <div className="container my-4">
      <h1 className="text-center my-4 fw-bold border-bottom pb-2">Products</h1>

      <div className="mb-4 d-flex justify-content-between align-items-center">
        <div>
          <label className="me-2 fw-bold">Category:</label>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="form-select d-inline-block w-auto"
          >
            {categories.map((cat, i) => (
              <option key={i} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="me-2 fw-bold">Max Price:</label>
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="form-control d-inline-block"
            style={{ width: "120px" }}
          />
        </div>
      </div>

      <div className="row">
        {products
          .filter((p) => (categoryFilter === "All" || p.category === categoryFilter) &&
                         p.price <= maxPrice)
          .map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProductGrid;
