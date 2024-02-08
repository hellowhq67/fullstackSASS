import mongoose from 'mongoose';

const pdfSchema = new mongoose.Schema({
  name: String,
  path: String,
});

// Compile the schema into a model
let PdfModel;
try {
  PdfModel = mongoose.model('Pdf');
} catch {
  PdfModel = mongoose.model('Pdf', pdfSchema);
}

export default PdfModel;
