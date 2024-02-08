"use client";
import React from "react";
import { Button } from "react-bootstrap";
import { Offcanvas } from "react-bootstrap";
import { useState } from "react";
import style from "./sidebar.module.css";
export default function Sidebar() {
  const [show, setShow] = useState(true);
  const [pdf,Setpdffiles] =useState(null)


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>CREATE TASK</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className={style.wrapper}>
          <input type="file" onChange={Setpdffiles} />
          <img src={pdf} alt="" />
          <input type="text" placeholder="text"/>
          <input type="text"placeholder="user name" />
          <textarea placeholder="desc"/>
        </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
