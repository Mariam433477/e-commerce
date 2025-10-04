import React from "react";
import AuthForm from "../components/FormAuth";
import { loginUser } from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (formData) => {
    dispatch(loginUser({ email: formData.email, password: formData.password }))
      .unwrap()
      .then((user) => {
         localStorage.setItem("loggedInUser", JSON.stringify(user));

        Swal.fire({
          title: "Welcome!",
          text: "Login successful!",
          icon: "success",
          confirmButtonText: "Go to Home",
        }).then(() => {
          navigate("/home");
        });
      })
      .catch((err) => {
        Swal.fire({
          title: "Login Failed",
          text: err.message || "Invalid email or password",
          icon: "error",
          confirmButtonText: "Try Again",
        });
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
