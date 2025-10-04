import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { MainButton } from "../custom/MainButton";
import { Link } from "react-router-dom";

export default function FormAuth({ title, fields, onSubmit, buttonText }) {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  );
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
    validate();
  };

  const validate = () => {
    const newErrors = {};
    if ("username" in formData && !formData.username.trim())
      newErrors.username = "Username is required";
    if ("email" in formData && !formData.email.trim())
      newErrors.email = "Email is required";
    if ("password" in formData && !formData.password)
      newErrors.password = "Password is required";
    else if ("password" in formData && formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (
      "confirm password" in formData &&
      formData.password !== formData["confirm password"]
    )
      newErrors["confirm password"] = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    onSubmit(formData);

    setFormData(
      fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
    );
    setTouched({});
  };

  const getInputClass = (field) => {
    if (errors[field] && touched[field]) return "is-invalid";
    if (!errors[field] && touched[field]) return "is-valid";
    return "";
  };

  return (
    <Card className="mx-auto mt-5" style={{ maxWidth: "400px" }}>
      <Card.Body>
        <h2 className="text-center mb-4">{title}</h2>
        <Form noValidate onSubmit={handleSubmit}>
          {fields.map((field) => (
            <Form.Group key={field.name} className="mb-3">
              <Form.Label>{field.label}</Form.Label>
              <Form.Control
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                onBlur={handleBlur}
                className={getInputClass(field.name)}
                required
              />
              {errors[field.name] && touched[field.name] && (
                <Form.Control.Feedback type="invalid" className="d-block">
                  {errors[field.name]}
                </Form.Control.Feedback>
              )}
            </Form.Group>
          ))}
          <MainButton type="submit" className="w-100">
            {buttonText}
          </MainButton>
        </Form>

        {/* النص أسفل الفورم */}
        {title === "Login" ? (
          <p className="mt-3 text-center">
            Don't have an account?{" "}
            <Link to="/register" className="text-primary">
              Register
            </Link>
          </p>
        ) : (
          <p className="mt-3 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-primary">
              Login
            </Link>
          </p>
        )}
      </Card.Body>
    </Card>
  );
}
