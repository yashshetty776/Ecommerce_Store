import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../../redux/products/productActions";

function ProductGrid() {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <h2 className="text-center my-5">Loading products...</h2>;
  }

  if (error) {
    return <h2 className="text-center my-5 text-danger">{error}</h2>;
  }

  return (
    <div className="container my-4">
      <h1 className="text-center my-4 fw-bold border-bottom pb-2">Products</h1>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
