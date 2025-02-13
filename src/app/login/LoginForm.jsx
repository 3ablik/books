"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { useRegister } from "../context/RegisterContext";
import Link from "next/link";
import styled from "styled-components";

const LoginForm = () => {
  const router = useRouter();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const { isAuthenticated, auth } = useAuth();
  const { accounts } = useRegister();

  const [wrong, setWrong] = useState(false);

  const handleLogin = (e) => {
    setLogin(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleAccount = () => {
    accounts.filter((account) => {
      if (account.login == login) {
        if (account.password == password) {
          auth();
        } else {
          setWrong(true);
        }
      }
    });
  };

  const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
  `;

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  return (
    <div className="login-form">
      <div>
        <input onChange={handleLogin} placeholder="Login" type="text" />
        <input onChange={handlePassword} placeholder="Password" type="text" />
      </div>
      <div
        style={{
          display: "flex",
          width: "300px",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <button onClick={handleAccount}>Login</button>
        <StyledLink href="/register">
          <h1
            style={{
              backgroundColor: "#ffffff",
              color: "#171717",
              border: "none",
              borderRadius: "4px",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "backgroundColor 0.3s",
              height: "20px",
              width: "120px",
            }}
          >
            No account?
          </h1>
        </StyledLink>
      </div>

      {wrong ? <h1>Wrong password or login</h1> : <h1></h1>}
    </div>
  );
};

export default LoginForm;
