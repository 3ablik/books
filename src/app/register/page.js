"use client";
import React, { useState } from "react";
import RegisterForm from "./RegisterForm";

export const accountsData = [
  {
    login: "admin",
    email: "admin@admin.admin",
    password: "admin123",
  },
];

export default function Register() {
  const [accounts, setAccounts] = useState(accountsData);

  return (
    <div>
      <RegisterForm accounts={accounts} setAccounts={setAccounts} />
    </div>
  );
}
