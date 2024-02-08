// components/PDFViewer.js
import React from 'react';
import { Document, Page } from 'react-pdf';

const PDFViewer = ({ pdfUrl }) => {
  return (
    <div>
      <Document >
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default PDFViewer;
