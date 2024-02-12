import Banner from '@/component/banner/Banner'
import Navbar from '@/component/navbar/Navbar'
import React from 'react'
import style from './page.module.css'
import Blog from '@/component/blogs/Blog'
import Card from '@/component/cards/Card'
import Footer from '@/component/footer/Footer'

export default function page() {
  return (
    <>

      <Navbar />

      <Banner />
      <Blog />
      <Footer />

    </>
  )
}
