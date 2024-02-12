"use client";
import img from "../../../public/assest/img.png";
import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React from "react";
import style from "./downloadpdf.module.css"

export default function Download({props}) {
 
    const [loader, setLoader] = useState(false);

    const downloadPDF = () =>{
      const capture = document.querySelector('.actual-receipt');
      setLoader(true);
      html2canvas(capture).then((canvas)=>{
        const imgData = canvas.toDataURL('img/png');
        const doc = new jsPDF('p', 'mm', 'a4');
        const componentWidth = doc.internal.pageSize.getWidth();
        const componentHeight = doc.internal.pageSize.getHeight();
        doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
        setLoader(false);
        doc.save('receipt.pdf');
      })
    }
  
    return (
      <div className="wrapper">
  
        <div className="receipt-box">
  
            {/* actual receipt */}
            <div className="actual-receipt">
  
              {/* organization logo */}
       
               <div  className="actual-receipt">
               <img alt="logo" width={399} src={img.src} />
          
               </div>
  
              {/* organization name */}
             
  
              {/* city province postal code */}
             
  
              {/* email-phone-and-website */}
              <div className="phone-and-website">
                <p>
                  <a href={`mailto:anwarhamza919@gmail.com`}>
                    anwarhamza919@gmail.com
                  </a>
                </p>
               
                    
                <p>
                  <a
                    href="https://www.youtube.com/@jsSolutions"
                    target="blank"
                  >
                    https://www.youtube.com/@jsSolutions
                  </a>
                </p>
                    
              </div>
  
              <div className="colored-row first">
                <span>USERNAME</span>
                <span>ID</span>
              </div>
  
              <div className="data-row">
                <span className="font-weight">ADMIN</span>
                <span>************4444</span>
              </div>
  
              <div className="colored-row">
                <span>Campaign</span>
                <span>Amount</span>
              </div>
  
              <div className="data-row">
                <span className="font-weight">Dollar a Day for Sadaqa</span>
                <span>
                  $
                  {' '}
                  50
                </span>
              </div>
  
              <div className="colored-row">
                <span>TO DO</span>
                <span />
              </div>
  
              <div className="data-row border-bottom">
                
                  <span className="font-weight">
                    loredspfspjfsfapgfjafjagh
                </span>
               
              </div>
  
              <div className="data-row border-bottom">
                <span>
                  <span className="font-weight">
                    Invoice
                    {' '}
                    #:
                  </span>
                  {' '}
                  AX1234ZVB5671234
                </span>
                <span>
                  <span className="font-weight">
                    Created
                    :
                  </span>
                  {' '}
                  2023-02-14 02:21:37
                </span>
              </div>
              <div className="data-row border-bottom">
                <span>
                  <span className="font-weight">
                    Authentication
                    {' '}
                    #:
                  </span>
                  {' '}
                  TEST
                </span>
                <span>
                  <span className="font-weight">
                    Batch
                    {' '}
                    #:
                  </span>
                  {' '}
                  1234
                </span>
              </div>
              <div className="data-row border-bottom">
                <span className="font-weight">
                  Transaction:
                  {' '}
                  APPROVED - 00
                </span>
                <span />
              </div>
              <div className="colored-row">
                <span>Thank You For Your Generous Donation</span>
                <span />
              </div>
  
            </div>
            {/* end of actual receipt */}
  
            {/* receipt action */}
            <div className="receipt-actions-div">
              <div className="actions-right">
                <button
                  className="receipt-modal-download-button"
                  onClick={downloadPDF}
                  disabled={!(loader===false)}
                >
                  {loader?(
                    <span>Downloading</span>
                  ):(
                    <span>Download</span>
                  )}
  
                </button> 
              </div>
            </div>
  
        </div>
        
      </div>
    );
}
