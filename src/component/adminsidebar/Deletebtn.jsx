"use client"
import React from 'react'
import { ToastContainer, toast } from 'react-toastify'

export default function Deletebtn(props) {
    console.log(props.id)
    const deleteUSer =async()=>{
        let res =await fetch("http://localhost:3000/api/users/"+props.id,{
            method:"delete"
        }).then((res)=>{
            if(res.ok){
                toast('user deleted')
            }
        })
        
    }
  return (
   <>
   <ToastContainer/>
    <button style={{padding:"10px 20px" ,border:"none"}} onClick={deleteUSer} >delete</button>
   </>
  )
}
