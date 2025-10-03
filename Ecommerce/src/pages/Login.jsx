import React from 'react'
import AuthForm from "../components/FormAuth"
export default function Login() {
  return (
    <AuthForm
      title="Login"
      buttonText="Sign In"
    //   onSubmit={handleLogin}
      fields={[
        { name: "email", label: "Email", type: "email" },
        { name: "password", label: "Password", type: "password" },
      ]}
    />
  )
}
