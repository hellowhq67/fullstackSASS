"use client";

import {UploadButton, UploadDropzone, Uploader } from "@/libs/uploadthings";

import React from "react";
import PDFViewer from "../pdfcard/PDFViewer";

export default function UploadPdf() {
  return (
    <div>
      <PDFViewer/>
      <UploadButton
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}

      />
      <UploadDropzone
       onClientUploadComplete={(res) => {
        // Do something with the response
        console.log("Files: ", res);
        alert("Upload Completed");
      }}
      onUploadError={(error) => {
        // Do something with the error.
        alert(`ERROR! ${error.message}`);
      }}
      />
    </div>
  );
}
