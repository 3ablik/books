"use client";
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const { isAuthenticated, auth } = useAuth();
  const [isManualLogin, setIsManualLogin] = useState(false);

  useEffect(() => {
    const fromUserClick = localStorage.getItem("fromUserClick");

    if (fromUserClick === "true") {
      setIsManualLogin(true);
    }
  }, []);

  useEffect(() => {
    console.log(isAuthenticated, "isauth");
    console.log(isManualLogin, "Check");

    if (isAuthenticated && !isManualLogin) {
      localStorage.removeItem("fromUserClick");
      router.push("/");
    }
  }, [isAuthenticated, router, isManualLogin]);

  useEffect(() => {
    auth();
  }, []);

  return (
    <div>
      <h1>Login</h1>
      <button onClick={auth}>Login</button>
    </div>
  );
};

export default Login;
