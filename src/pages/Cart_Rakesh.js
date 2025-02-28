import React from "react";

const Cart = ({ cart, updateQuantity, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "800px",
        margin: "auto",
        marginTop: "40px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Cart</h1>
      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            marginBottom: "15px",
            background: "white",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h2>{item.title}</h2>
            <p>
              <strong>
                ${item.price} x {item.quantity}
              </strong>
            </p>
          </div>
          <div>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              style={{
                cursor: "pointer",
                padding: "5px 10px",
                margin: "5px",
                border: "1px solid #000",
                borderRadius: "5px",
              }}
            >
              +
            </button>
            <button
              onClick={() =>
                updateQuantity(item.id, Math.max(1, item.quantity - 1))
              }
              style={{
                cursor: "pointer",
                padding: "5px 10px",
                margin: "5px",
                border: "1px solid #000",
                borderRadius: "5px",
              }}
            >
              -
            </button>
            <button
              onClick={() => removeFromCart(item.id)}
              style={{
                cursor: "pointer",
                padding: "5px 10px",
                margin: "5px",
                border: "1px solid #000",
                borderRadius: "5px",
              }}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <h2>Total: ${total.toFixed(2)}</h2>
    </div>
  );
};

export default Cart;
