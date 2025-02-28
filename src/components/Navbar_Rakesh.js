import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "15px",
        background: "#007bff",
        color: "white",
        fontSize: "18px",
        fontWeight: "bold",
      }}
    >
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        Home
      </Link>
      <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
        Cart
      </Link>
      <Link to="/checkout" style={{ color: "white", textDecoration: "none" }}>
        Checkout
      </Link>
    </nav>
  );
};
export default Navbar;
