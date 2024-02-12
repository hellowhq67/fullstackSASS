import React from "react";
import style from "./blog.module.css";
import Link from "next/link";
export default function Index1() {
  return (
    <div className={style.wrapper}>
      <div className={style.textCol}>
        <h1 className={style.h1}>Know what you havve built</h1>
        <p className={style.p}>
          {" "}
          A culture of quality and safety leads to improved professional pride
          in the industry With Congrid everyone takes personal responsibility
          for delivering work on time with the highest quality and safety
          standards
        </p>
        <div></div>
      </div>
      <img
        className={style.img}
        src="https://img.freepik.com/free-photo/construction-silhouette_1127-3246.jpg?size=626&ext=jpg&uid=R83594223&ga=GA1.1.1502403816.1643644406&semt=sph"
        alt=""
      />
    </div>
  );
}
