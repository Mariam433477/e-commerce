import React from 'react'
import AuthForm from "../components/FormAuth"
export default function Register() {
  return (
    <>
     <AuthForm
      title="Register"
      buttonText="Sign Up"
    //   onSubmit={handleRegister}
      fields={[
        { name: "username", label: "Username", type: "text" },
        { name: "email", label: "Email", type: "email" },
        { name: "password", label: "Password", type: "password" },
        { name: "confirm password", label: "confirm Password", type: "password" },
      ]}
    />
    </>
  )
}
