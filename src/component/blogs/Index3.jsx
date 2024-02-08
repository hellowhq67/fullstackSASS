import React from 'react'
import style from './blog.module.css';
import Link from 'next/link';
export default function Index3() {
  return (
    <div className={style.wrapper}>
        <img
      className={style.img}
      src="https://img.freepik.com/free-photo/construction-site-silhouettes_1127-3253.jpg?size=626&ext=jpg&uid=R83594223&ga=GA1.1.1502403816.1643644406&semt=sph"
      alt=""
    />
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
        
         
    
      </div>
    </div>
    
  </div>
  )
}
