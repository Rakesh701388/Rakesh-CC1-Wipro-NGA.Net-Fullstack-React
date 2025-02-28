import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Checkout = () => {
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    address: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    address: Yup.string().required("Address is required"),
  });

  const handleSubmit = () => {
    navigate("/confirmation");
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "600px",
        margin: "auto",
        border: "1px solid #ddd",
        borderRadius: "8px",
        background: "#f9f9f9",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#333" }}>Checkout</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <label>Name:</label>
            <Field
              type="text"
              name="name"
              style={{
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
              }}
            />
            <ErrorMessage
              name="name"
              component="div"
              style={{ color: "red" }}
            />
            <label>Email:</label>
            <Field
              type="email"
              name="email"
              style={{
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
              }}
            />
            <ErrorMessage
              name="email"
              component="div"
              style={{ color: "red" }}
            />
            <label>Address:</label>
            <Field
              type="text"
              name="address"
              style={{
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
              }}
            />
            <ErrorMessage
              name="address"
              component="div"
              style={{ color: "red" }}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                padding: "10px",
                background: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Place Order
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Checkout;
