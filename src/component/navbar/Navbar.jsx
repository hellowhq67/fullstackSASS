"use client";
import React from "react";
import style from "./Nav.module.css";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
export default function Nav() {
  const { data: session } = useSession();
  return (
    <>
      <nav className={style.nav}>
        <ul className={style.links}>
          <Link href="" className={style.logo}>
            Floor plan
          </Link>
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
            <Link href="/Category">Cetagory</Link>
          </li>

          {session ? (
            <li>
              <Link href="/pdfcreate">create task</Link>
            </li>
          ) : (
            ""
          )}
          
          
        </ul>

        <div>
          {!session ? (
            <div>
              <Link className={style.btn} href="/login">
                {" "}
                login{" "}
              </Link>
            </div>
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
