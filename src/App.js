import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home_Rakesh";
import Cart from "./pages/Cart_Rakesh";
import Checkout from "./pages/Checkout_Rakesh";
import Confirmation from "./pages/Confirmation_Rakesh";
import Navbar from "./components/Navbar_Rakesh";

const App = () => {
  // State to manage cart items
  const [cart, setCart] = useState([]);

  // Function to add items to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Function to update the quantity of an item in the cart
  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Function to clear the cart after order placement
  const clearCart = () => {
    setCart([]);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f8f9fa" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/confirmation"
          element={<Confirmation cart={cart} clearCart={clearCart} />}
        />
      </Routes>
    </div>
  );
};

export default App;
