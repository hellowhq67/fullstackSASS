"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import style from "./login.module.css";
import { ToastContainer, toast } from "react-toastify";
export default function LoginFrom() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res.ok) {
        toast("login sucess");
      }

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.conteiner}>
      <ToastContainer />
      <div className={style.wrapper}>
        <img
          src="https://img.freepik.com/free-vector/construction-concept-with-retro-style-concept-workers-machines-building-house-cartoon_1284-8104.jpg?size=626&ext=jpg&uid=R83594223&ga=GA1.1.1502403816.1643644406&semt=sph"
          alt=""
        />
        <form onSubmit={handleSubmit} className={style.from}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            className={style.input}
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className={style.input}
          />
          <button className={style.btn}>Login</button>
          {error && <div className="">{error}</div>}

          <Link className="text-sm mt-3 text-right" href={"/register"}>
            Don't have an account? <span className="underline">Register</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
