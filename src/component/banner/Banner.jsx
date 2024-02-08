import React from "react";
import style from "./banner.module.css";
import Link from "next/link";
export default function Banner() {
  return (
    <div className={style.wrapper}>
      <div className={style.textCol}>
        <h1 className={style.h1}>Know what you've built</h1>
        <p className={style.p}>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis libero,
          minima voluptate quam nulla optio. Optio veniam praesentium quis!
          Voluptates dignissimos neque delectus adipisci possimus in sequi, nam
          modi unde!
        </p>
        <div>
          
           <div style={{marginTop:20}}>
           <Link   href="/" className={style.btn}>GET STARTED FOR FREE</Link>
           </div>
      
        </div>
      </div>
      <img
        className={style.img}
        src="https://congrid.com/wp-content/uploads/2020/07/Congrid_main_product_tasklist.png"
        alt=""
      />
    </div>
  );
}
