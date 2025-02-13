"use client";
import React from "react";
import { useRegister } from "../context/RegisterContext";
import { useAuth } from "../context/AuthContext";
import Link from "next/link";

const Profile = () => {
  const { user } = useRegister();
  console.log(user);

  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated);

  return (
    <div>
      <h1>Profile</h1>
      {isAuthenticated ? (
        <div>
          <h3>Login: {user.login}</h3>
          <h3>Email: {user.email}</h3>
        </div>
      ) : (
        <div>
          <h3>Maybe sign in account?</h3>
          <Link
            href="login"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10px",
              width: "100px",
              height: "50px",
              backgroundColor: "lightgray",
              border: "1px, solid, gray",
            }}
          >
            <button
              style={{
                padding: "0.75rem 1.5rem",
                backgroundColor: "#ffffff",
                color: "#171717",
                border: "none",
                borderRadius: "4px",
                fontSize: "1rem",
                cursor: "pointer",
                transition: "backgroundColor 0.3s",
              }}
            >
              Sign In!
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Profile;
