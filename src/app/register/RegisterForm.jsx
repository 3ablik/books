"use client";
import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useRegister } from "../context/RegisterContext";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();

  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isAuthenticated, auth } = useAuth();
  const { addAccount } = useRegister();

  const handleLogin = (e) => {
    setLogin(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleNewAccount = () => {
    addAccount(login, email, password);
    auth();
  };

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  return (
    <div className="register-form">
      <div>
        <input onChange={handleLogin} placeholder="Login" type="text" />
        <input onChange={handleEmail} placeholder="E-mail" type="text" />
        <input onChange={handlePassword} placeholder="Password" type="text" />
      </div>
      <button onClick={handleNewAccount}>Register</button>
    </div>
  );
};

export default RegisterForm;
