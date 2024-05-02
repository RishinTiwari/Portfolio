import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experiences from './components/experience/Experience'
import Blog from './components/blog/Blog'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

export const App = () => {
  return (
    <>
    <Header />
      <Nav />
      <About/>
      <Experiences/>
      <Portfolio/>
      <Contact/>
      <Blog />
      <Footer />
    </>
  )
}
