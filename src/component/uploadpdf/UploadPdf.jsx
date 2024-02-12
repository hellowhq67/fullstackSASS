"use client";
import React, { useState } from "react";
import style from "@/component/uploadpdf/style.module.css";
import { useSession } from "next-auth/react";
import { UploadButton } from "@uploadthing/react";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import Image from "next/image";
import UploadPdf from "../../component/uploadpdf/UploadPdf";

export default function UploadPdfPage() {
  const { data: session } = useSession();
  const [title, setTitle] = useState("");
  const [name, setUserName] = useState("");
  const [desc, setTask] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loader, setLoader] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [markers, setMarkers] = useState([]);
  const { handleSubmit, register, reset } = useForm();
  async function onSubmit(data) {
    data.imgUrl = imageUrl;
    console.log(data);
  }
  //zoom function
  const handleZoomIn = () => {
    setZoomLevel(zoomLevel + 0.1);
  };
  //zoom out function
  const handleZoomOut = () => {
    setZoomLevel(zoomLevel - 0.1);
  };

  const handleImageClick = (event) => {
    const boundingRect = event.target.getBoundingClientRect();
    const offsetX = event.clientX - boundingRect.left;
    const offsetY = event.clientY - boundingRect.top;
    const marker = {
      id: Math.random().toString(36).substring(7),
      x: offsetX / event.target.width,
      y: offsetY / event.target.height,
    };
    setMarkers([...markers, marker]);
  };

  const handleMarkerClick = (id) => {
    const updatedMarkers = markers.filter((marker) => marker.id !== id);
    setMarkers(updatedMarkers);
  };

  return (
    <div className={style.wrapper} data-inmaintabuse={true}>
      <form onSubmit={handleSubmit(onSubmit)} className={style.aside}>
        {!session ? "" : <label>{session.user.name}</label>}

        <label>User Name</label>
        <input
          {...register("name")}
          type="text"
          name="title"
          id="title"
          autoComplete="given-name"
          className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
          placeholder="Type User Name"
        />
        <label>TO DO TEXT</label>
        <input
          {...register("desc")}
          type="text"
          name="desc"
          id="desc"
          autoComplete="given-desc"
          className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
          placeholder="Type to do task"
        />
        <input
          {...register("desc")}
          type="text"
          name="desc"
          id="desc"
          autoComplete="given-desc"
          className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
          placeholder="Type to do task"
        />
        <label>ADD TITLE</label>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            setImageUrl(res);
            toast.success("image uploaded");
          }}
          onUploadError={(error) => {
            alert(`ERROR! ${error.message}`);
          }}
        />
        {!imageUrl ? (<Image src={imageUrl} width={300} height={200} alt="image"/>) : (null)}
        <button type="submit" className="Upload">
          Upload as post
        </button>
      </form>

      <div className={style.preview}>
        <ToastContainer />
        <h1>POST PREVIEW</h1>
        <div style={{ marginBottom: "10px" }}>
          <button
            style={{ padding: "10px", background: "none" }}
            onClick={handleZoomIn}
          >
            +
          </button>
          <button style={{ padding: "10px" }} onClick={handleZoomOut}>
            -
          </button>
        </div>
        <div className={style.posts}>
          <div className={style.table}>
            <div className={style.dataTable}>
              <span>USER NAME:</span>
              <span>{name}</span>
            </div>
            <div className={style.dataTable}>
              <span>DESCRIPTION:</span>
              <span>{desc}</span>
            </div>
            <div className={style.dataTable}>
              <span>Title</span>
              <span>{title}</span>
            </div>
          </div>

          <div>
            <div
              style={{
                width: "100%", // Set your desired width
                overflow: "scroll",
                height: "100%", // Set your desired height
                border: "1px solid #18a2dd8f",
                position: "relative",
              }}
            >
              {markers.map((marker) => (
                <div
                  key={marker.id}
                  style={{
                    position: "absolute",
                    left: `${marker.x * 100}%`,
                    top: `${marker.y * 100}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  onClick={() => handleMarkerClick(marker.id)}
                >
                  {marker.id}
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      backgroundColor: "#18a2ddcf",
                    }}
                  />
                </div>
              ))}
              <img
                src={""} // Replace with your image URL
                alt="Zoomable Image"
                onClick={handleImageClick}
                style={{
                  width: `${100 * zoomLevel}%`, // Adjust the width based on zoom level
                  height: `${100 * zoomLevel}%`, // Adjust the height based on zoom level
                  transition: "all 0.2s ease-in-out", // Add transition for smooth zooming
                }}
              />
            </div>
          </div>
        </div>
        <button  className={style.btnDown}>
          Download as PDF
        </button>
      </div>
    </div>
  );
}
