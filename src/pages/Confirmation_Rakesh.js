import React from "react";
import { useNavigate } from "react-router-dom";

const Confirmation = ({ cart, clearCart }) => {
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "800px",
        margin: "auto",
        marginTop: "40px",
        textAlign: "center",
      }}
    >
      <h1>Order Confirmed!</h1>
      <p>
        Thank you for your purchase. Your order has been placed successfully.
      </p>
      <h2>Order Summary</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {cart.map((item) => (
          <li
            key={item.id}
            style={{ padding: "10px 0", borderBottom: "1px solid #ddd" }}
          >
            {item.title} - ${item.price} x {item.quantity}
          </li>
        ))}
      </ul>
      <h3>Total: ${total.toFixed(2)}</h3>
      <button
        onClick={() => {
          clearCart();
          navigate("/");
        }}
        style={{
          cursor: "pointer",
          padding: "10px 20px",
          marginTop: "20px",
          border: "none",
          background: "#007bff",
          color: "white",
          borderRadius: "5px",
        }}
      >
        Back to Home
      </button>
    </div>
  );
};

export default Confirmation;
