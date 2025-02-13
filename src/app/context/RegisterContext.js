"use client";
import React, { useState, createContext, useContext } from "react";

const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  const [accounts, setAccounts] = useState([
    {
      login: "admin",
      email: "admin@admin.admin",
      password: "admin123",
      id: 0,
    },
  ]);

  const [user, setUser] = useState({});

  const addAccount = (login, email, password) => {
    setAccounts((prev) => {
      const newId = prev.length;
      const newAccount = { login, email, password, id: newId };
      setUser(newAccount);
      return [...prev, newAccount];
    });
  };

  return (
    <RegisterContext.Provider value={{ accounts, addAccount, user }}>
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegister = () => useContext(RegisterContext);
