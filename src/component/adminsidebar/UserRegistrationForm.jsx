// UserRegistrationForm.js
"use client";
import styles from "./style.module.css";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
const UserRegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router =useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        toast("user added ");
        router.push("/dashboard")

      } else {
        toast(data.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      toast("An error occurred while registering the user.");
    }
  };

  return (
    <div className={styles.addusercon}>
      <h1 style={{ textAlign: "center",  color:"white"}}>ADD Users</h1>
      <ToastContainer />
      <form className={styles.from} onSubmit={handleSubmit}>
       
            <span>user name</span>
          <input
            type="text"
            className={styles.inputs}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
       
            <span>email</span>
          <input
            type="email"
            className={styles.inputs}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
      
            <span>password</span>
          <input
            type="password"
            className={styles.inputs}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
      
        <button className={styles.btn2} type="submit">ADD USER</button>
      </form>
     
    </div>
  );
};

export default UserRegistrationForm;
