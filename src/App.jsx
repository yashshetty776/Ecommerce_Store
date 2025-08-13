// import './App.css'
import { Routes, Route } from "react-router-dom";
import { Navbar,ProductDetails } from "./components";
import { Home, Cart, Login } from "./pages";

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
