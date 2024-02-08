"use client";

import React from "react";
import style from "./style.module.css";
import { useState } from "react";
import Link from "next/link";
import Post from "./Post";
import UploadPost from "./UploadPost";
import User from "./User";
import UserRegistrationForm from "./UserRegistrationForm";
export default function Adminbar() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.bar}>
        <ul className={style.lists}>
          <div className={style.btncol}>
            <li
              onClick={() => handleTabClick("tab1")}
              className={`${activeTab === "tab1" ? "active" : ""} ${
                style.btn1
              } ${style.btn}`}
            >
              User
            </li>
            <li
              onClick={() => handleTabClick("tab2")}
              className={`${activeTab === "tab2" ? "active" : ""} ${
                style.btn1
              } ${style.btn}`}
            >
              Upload Post
            </li>
            <li
              onClick={() => handleTabClick("tab3")}
              className={`${activeTab === "tab3" ? "active" : ""} ${
                style.btn1
              } ${style.btn}`}
            >
              All Posts
            </li>
            <li
              onClick={() => handleTabClick("tab4")}
              className={`${activeTab === "tab4" ? "active" : ""} ${
                style.btn1
              } ${style.btn}`}
            >
              Add User
            </li>
          </div>
        </ul>
      </div>

      <div className={style.colwrppaer}>
        {activeTab === "tab1" && <User />}
        {activeTab === "tab2" && <UploadPost />}
        {activeTab === "tab3" && <Post/>}
        {activeTab === "tab4" && <UserRegistrationForm />}
      </div>
    </div>
  );
}
