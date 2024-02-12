import React from "react";
import style from "./banner.module.css";
import Link from "next/link";
import Image from "next/image";
export default function Banner() {
  return (
    <div className={style.wrapper}>
     
        <img
          className={style.img}
          src={
            "https://img.freepik.com/free-psd/three-dimensional-image-computer_53876-1610.jpg?size=626&ext=jpg&ga=GA1.1.1708199425.1706900875&semt=ais"
          }
        />
  
      <div className={style.textCol}>
        <h1 className={style.h1}>Know what you have built</h1>
        <p className={style.p}>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis libero
          minima voluptate quam nulla optio Optio veniam praesentium quis
          Voluptates dignissimos neque delectus adipisci possimus in sequinam
          modi unde
        </p>
        <div>
          <div style={{ marginTop: 20 }}>
            <Link href="/" className={style.btn}>
              GET STARTED FOR FREE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
