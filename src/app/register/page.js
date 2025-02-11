"use client";
import React, { useState } from "react";
import RegisterForm from "./RegisterForm";

export default function Register() {
  const [accounts, setAccounts] = useState([
    {
      login: "admin",
      email: "admin@admin.admin",
      password: "admin123",
    },
  ]);

  return (
    <div>
      <RegisterForm accounts={accounts} setAccounts={setAccounts} />
    </div>
  );
}
