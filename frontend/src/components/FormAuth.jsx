import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { MainButton } from "../custom/MainButton";
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
    if (errors[field] && touched[field]) return "form-control is-invalid";
    if (!errors[field] && touched[field]) return "form-control is-valid";
    return "form-control";
  };
  return (
    <>
      <Card className="mx-auto mt-5" style={{ maxWidth: "400px" }}>
        <Card.Body>
          <h2 className="text-center mb-4">{title}</h2>
          <Form onSubmit={handleSubmit}>
            {fields.map((field) => (
              <Form.Group key={field.name} className="mb-3">
                <Form.Label>{field.label}</Form.Label>
                <Form.Control
                  type={field.type}
                  name={field.name}
                  className={getInputClass(field.name)}
                  value={formData[field.name]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
              </Form.Group>
            ))}
            <MainButton
              variant="primary"
              type="submit"
              className="w-100
          "
            >
              {" "}
              {buttonText}
            </MainButton>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
