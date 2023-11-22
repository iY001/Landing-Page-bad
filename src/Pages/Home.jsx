import React from 'react'
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Content from '../components/Content';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Reviews from '../components/Reviews';
import Footer from '../components/footer'
function Home() {
  return (
    <>    
    <Navbar/>
      <Header />
      <Content/>
      <Blog/>
      <Reviews/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home