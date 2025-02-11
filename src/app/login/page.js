"use client";
import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const { isAuthenticated, login } = useAuth();
  console.log(isAuthenticated, "isAuth");

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  return (
    <div>
      <h1>Login</h1>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
