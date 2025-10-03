import React from "react";
import AuthForm from "../components/FormAuth";
import { loginUser } from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (formData) => {
    dispatch(loginUser({ email: formData.email, password: formData.password }))
      .unwrap()
      .then(() => {
        alert("Login successful!");
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <AuthForm
      title="Login"
      buttonText="Sign In"
      onSubmit={handleLogin}
      fields={[
        { name: "email", label: "Email", type: "email" },
        { name: "password", label: "Password", type: "password" },
      ]}
    />
  );
}
