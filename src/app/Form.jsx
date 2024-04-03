"use client";
import React, { useState } from "react";

export default function Form() {
  const [user, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Form submitted with ${user} and ${password}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input value={user} onChange={handleUsername} type="text" />
      </label>
      <label>
        Password:
        <input value={password} onChange={handlePassword} type="password" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
