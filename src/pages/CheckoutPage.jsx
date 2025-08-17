import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, Row, Card } from "react-bootstrap";
import { clearCart } from "../redux/cart/cartActions";

const CheckoutPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const onSubmit = (data) => {
    console.log("Order Details:", data);
    alert("Order placed successfully!");
    dispatch(clearCart());
    navigate("/"); 
  };

  return (
    <div className="container my-5">
      <Row>
        <Col lg={7}>
          <h3 className="mb-4 fst-italic text-decoration-underline text-center">Checkout</h3>
          <div className="p-4 border rounded shadow-sm">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  {...register("name", { required: "Name is required" })}
                  isInvalid={errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter phone number"
                  {...register("phone", { 
                    required: "Phone is required", 
                    pattern: { value: /^[0-9]{10}$/, message: "Enter a valid 10-digit phone" }
                  })}
                  isInvalid={errors.phone}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.phone?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                placeholder="1234 Main St"
                {...register("address", { required: "Address is required" })}
                isInvalid={errors.address}
              />
              <Form.Control.Feedback type="invalid">
                {errors.address?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                placeholder="Enter City"
                  {...register("city", { required: "City is required" })}
                  isInvalid={errors.city}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.city?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="formState">
                <Form.Label>State</Form.Label>
                <Form.Select
                  defaultValue=""
                  {...register("state", { required: "State is required" })}
                  isInvalid={errors.state}
                >
                  <option value="">Choose...</option>
                  <option>Karnataka</option>
                  <option>Maharashtra</option>
                  <option>Delhi</option>
                  <option>Other</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.state?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="formZip">
                <Form.Label>Pin Code</Form.Label>
                <Form.Control
                placeholder="Enter Pin"
                  {...register("zip", { 
                    required: "Pin is required", 
                    pattern: { value: /^[0-9]{6}$/, message: "Enter a valid 6-digit zip" } 
                  })}
                  isInvalid={errors.zip}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.zip?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Button variant="warning" type="submit">
              Place Order
            </Button>
          </Form>
          </div>
        </Col>

        <Col lg={5}>
          <Card className="p-3 shadow-sm mt-5 mt-lg-0">
            <h5>Order Summary</h5>
            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <ul className="list-unstyled">
                {cartItems.map((item) => (
                  <li key={item.id} className="mb-2">
                    {item.title.split(" ").slice(0, 8).join(" ")} x {item.quantity} = ₹
                    {item.price * item.quantity}
                  </li>
                ))}
              </ul>
            )}
            <hr />
            <h5>Total: ₹{totalAmount.toFixed(2)}</h5>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CheckoutPage;
