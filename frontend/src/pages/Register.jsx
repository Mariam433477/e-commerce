import React from "react";
import AuthForm from "../components/FormAuth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers, registerUser } from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.userSlice?.list || []);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleRegister = (formData) => {
     
    if (users.find((u) => u.email === formData.email)) {
      alert("Email already exists");
      return;
    }

    dispatch(
      registerUser({
        name: formData.username,
        email: formData.email,
        password: formData.password,
      })
    );

    alert("Registered successfully!");
    navigate("/login");  
  };

  return (
    <>
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
            label: "confirm Password",
            type: "password",
          },
        ]}
      />
    </>
  );
}
