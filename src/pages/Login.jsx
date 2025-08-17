import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {

  const { setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [isRegistered, setIsRegistered] = useState(
    localStorage.getItem("user") ? true : false
  );

  const { register, handleSubmit, reset } = useForm();

  const onSubmitRegister = (data) => {
    localStorage.setItem("user", JSON.stringify(data)); 
    alert("Registration successful! Please login.");
    setIsRegistered(true);
    reset();
  };

  const onSubmitLogin = (data) => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (!savedUser) {
      alert("No registered user found. Please register first.");
      return;
    }
    if (data.email === savedUser.email && data.password === savedUser.password) {
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
      alert("Login successful!");
      navigate("/")
    } else {
      alert("Invalid credentials!");
    }
    reset();
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      {isRegistered ? (
        <form onSubmit={handleSubmit(onSubmitLogin)}>
          <h3 className="mb-3">Login</h3>
          
          <input
            className="form-control mb-2"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <input
            className="form-control mb-2"
            placeholder="Password"
            type="password"
            {...register("password", { required: true })}
          />
          <button className="btn btn-warning w-100 mb-2" type="submit">
            Login
          </button>
          <p className="text-center">
            Not registered yet?{" "}
            <span
              className="text-primary"
              style={{ cursor: "pointer" }}
              onClick={() => setIsRegistered(false)}
            >
              Register
            </span>
          </p>
        </form>
      ) : (
        <form onSubmit={handleSubmit(onSubmitRegister)}>
          <h3 className="mb-3">Register</h3>
          <input
            className="form-control mb-2"
            placeholder="Name"
            {...register("name", { required: true })}
          />
          <input
            className="form-control mb-2"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <input
            className="form-control mb-2"
            placeholder="Password"
            type="password"
            {...register("password", { required: true })}
          />
          <button className="btn btn-warning w-100 mb-2" type="submit">
            Register
          </button>
          <p className="text-center">
            Already a customer?{" "}
            <span
              className="text-primary"
              style={{ cursor: "pointer" }}
              onClick={() => setIsRegistered(true)}
            >
              Login
            </span>
          </p>
        </form>
      )}
    </div>
  );
};

export default Login;
