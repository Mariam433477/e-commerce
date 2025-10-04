import React, { useEffect } from "react";
import AuthForm from "../components/FormAuth";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, registerUser } from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.userSlice?.list || []);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleRegister = (formData) => {
    if (users.find((u) => u.email === formData.email)) {
      Swal.fire({
        title: "Oops!",
        text: "Email already exists, try another one.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    dispatch(
      registerUser({
        name: formData.username,
        email: formData.email,
        password: formData.password,
      })
    );

    Swal.fire({
      title: "Success!",
      text: "Registered successfully!",
      icon: "success",
      confirmButtonText: "Go to Login",
    }).then(() => {
      navigate("/"); 
    });
  };

  return (
    <AuthForm
      title="Register"
      buttonText="Sign Up"
      onSubmit={handleRegister}
      fields={[
        { name: "username", label: "Username", type: "text" },
        { name: "email", label: "Email", type: "email" },
        { name: "password", label: "Password", type: "password" },
        {
          name: "confirm password",
          label: "Confirm Password",
          type: "password",
        },
      ]}
    />
  );
}
