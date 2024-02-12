import React from "react";
import style from "./blog.module.css";
import Index2 from "@/component/blogs/Index2";
import Index1 from "@/component/blogs/Index1";
import Index4 from "@/component/blogs/Index4";
import Index3 from "@/component/blogs/Index3";
export default function Blog() {
  return (
    <>
      <section style={{ background: "#EEEDEB" }}>
        <Index2 />
        <Index1 />
        <Index3/>
        <Index4/>
      </section>
    </>
  );
}
