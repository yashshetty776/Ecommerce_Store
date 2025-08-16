import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromCart, updateQuantity } from "../redux/cart/cartActions";
import { useEffect } from "react";

const CartPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cart); 

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const goToCheckout = () => {
    navigate("/checkout"); 
  };

  return (
    <div
      className="container-fluid my-4"
      style={{ minHeight: "100vh" }}
    >
      <div className="row">

        <div className="col-lg-8 col-md-7 p-4">
          <h2 className="mb-4">Shopping Cart</h2>
          <hr />
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="card mb-3 shadow-sm border-0">
                <div
                  className="row g-0 p-3 rounded-5"
                >
                  <div className="col-md-3 d-flex align-items-center justify-content-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="img-fluid"
                      style={{ maxHeight: "180px", objectFit: "contain" }}
                    />
                  </div>

                  <div className="col-md-9">
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text text-primary fw-bold">
                        ₹{item.price}
                      </p>

                      <div className="d-flex align-items-center mb-2">
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => dispatch(updateQuantity(item.id, item.quantity - 1))}
                          disabled={item.quantity <= 1}
                        >
                          −
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => dispatch(updateQuantity(item.id, item.quantity + 1))}
                        >
                          +
                        </button>
                      </div>

                      {/* Remove Item Button */}
                      <button
                        className="btn btn-danger mt-3 fw-bold"
                        onClick={() => dispatch(removeFromCart(item.id))}
                        style={{ fontSize: "0.9rem" }}
                      >
                        Remove Item
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="col-lg-4 col-md-5 p-4">
          <div className="card p-4 shadow-sm mt-5" style={{ top: "30px" }}>
            <h5>
              Subtotal ({cartItems.length} items):{" "}
              <span className="text-danger fw-bold">
                ₹{totalAmount.toFixed(2)}
              </span>
            </h5>
            <button className="btn btn-warning w-100 mt-3 fw-bold" onClick={goToCheckout}>
              Proceed to Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
