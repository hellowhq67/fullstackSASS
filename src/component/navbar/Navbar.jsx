"use client";
import React, { useState } from "react";
import style from "./Nav.module.css";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";


export default function Nav() {
  const { data: session } = useSession();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(true)
  };
  const  handelClose =()=>{
    setIsNavOpen(false)
  }
  return (
    <>
      <nav className={style.nav}>
        <button className={style.svg} onClick={toggleNav}>
          <svg
            id="svg"
            className={`${style.svg} `}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12h18M3 6h18M3 18h18"
            />
          </svg>
        </button>

        <ul className={`${style.links} ${isNavOpen ? style.actives : ""}`}>
          <h2 className={style.logo}>GLASS FLOOR</h2>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li className={style.dropDown}>
            <Link href="/page">product</Link>
            <ul className={style.drop}>
              <li>
                <Link href="">Resources</Link>
              </li>
              <li>
                <Link href="">About US</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/post">Post</Link>
          </li>
          <li>
            <Link href="/Category">Category</Link>
          </li>
          {session ? (
            <li>
              <Link href="/task">create task</Link>
            </li>
          ) : (
            ""
          )}
          <li><button className={style.close} onClick={handelClose}>x</button></li>
        </ul>

        <div className={style.auth}>
          {!session ? (
            <Link className={style.btn} href="/login">
              Login
            </Link>
          ) : (
            <>
              <span>{session.user.name}</span>
              <button className={style.btn} onClick={() => signOut()}>
                Sign out
              </button>
            </>
          )}
        </div>
      </nav>
    </>
  );
}
