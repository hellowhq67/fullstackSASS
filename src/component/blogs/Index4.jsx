import React from "react";
import style from "./blog.module.css";
import Link from "next/link";
export default function Index4() {
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
        <div>
          <div style={{ marginTop: 20 }}>
            <Link className={style.btn} href="/">
              GET STARTED FOR FREE
            </Link>
          </div>
        </div>
      </div>
      <img
        className={style.img}
        src="https://img.freepik.com/free-photo/civil-engineer-construction-worker-manager-holding-digital-tablet-blueprints-talking-planing-about-construction-site-cooperation-teamwork-concept_640221-156.jpg?size=626&ext=jpg&uid=R83594223&ga=GA1.1.1502403816.1643644406&semt=sph"
        alt=""
      />
    </div>
  );
}
