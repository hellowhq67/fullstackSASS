// UserRegistrationForm.js
"use client";
import styles from "./style.module.css";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
const UserRegistrationForm = () => {
  const [title, settitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [pdf, setPDF] = useState("");
  const router =useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title,desc,img,pdf }),
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
      <ToastContainer />
      <form className={styles.from} onSubmit={handleSubmit}>
       
            <span>title</span>
          <input
            type="text"
            className={styles.inputs}
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />
       
            <span>desc</span>
          <input
            type="text"
            className={styles.inputs}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
      
            <span>Img links</span>
          <input
            type="text"
            className={styles.inputs}
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
       <span>Pdf links</span>
          <input
            type="text"
            className={styles.inputs}
            value={pdf}
            onChange={(e) => setPDF(e.target.value)}
          />
        <button className={styles.btn2} type="submit">ADD USER</button>
      </form>
     
    </div>
  );
};

export default UserRegistrationForm;
