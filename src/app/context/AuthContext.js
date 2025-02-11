"use client";
import React, { useState, useContext, createContext, useEffect } from "react";

const AuthContext = createContext({ isAuthenticated: false, login: () => {} });

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const auth = () => {
    setIsAuthenticated((prevState) => {
      const newState = !prevState;
      return newState;
    });
  };

  useEffect(() => {}, [isAuthenticated]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, auth }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
