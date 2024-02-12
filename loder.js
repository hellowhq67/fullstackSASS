export default function akamaiLoader({ src, width, quality }) {
    return `http://localhost:3000/${src}?imwidth=${width}`
  }