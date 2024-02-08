"use client"
import React from 'react'
import { Paper } from '@mui/material'
import style from "./Card.module.css"
export default function Card() {
    const data = [
        {
         title:"I ansh"
        },
        {

        },
        {

        },
    ]
  return (
    <div className={style.wrapper}>
      <Paper>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur recusandae aperiam voluptas rem vel distinctio nam sunt veniam voluptate iure.
      </Paper>
      <Paper>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur recusandae aperiam voluptas rem vel distinctio nam sunt veniam voluptate iure.
      </Paper>
      <Paper>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur recusandae aperiam voluptas rem vel distinctio nam sunt veniam voluptate iure.
      </Paper>
    </div>
  )
}
