"use client";
import React, { useState, useContext, createContext, useEffect } from "react";

const AuthContext = createContext({ isAuthenticated: false, auth: () => {} });

export const AuthProvider = ({ children }) => {
  console.log("AuthProvider");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const auth = () => {
    setIsAuthenticated(true);
  };
  useEffect(() => {
    console.log("Auth state changed:", isAuthenticated);
  }, [isAuthenticated]);

  useEffect(() => {
    console.log(isAuthenticated);
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, auth }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
