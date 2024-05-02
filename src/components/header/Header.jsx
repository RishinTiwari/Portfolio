import React from 'react'
import './Header.css'
import CTA from './CTA'
import Me from '../../assets/Me.jpeg'
import HeaderSocials from './HeaderSocials'
import About from '../../components/about/About'
import Experience from '../experience/Experience'
import Portfolio from '../portfolio/Portfolio'
import Contact from '../contact/Contact'
import '../about/About.css'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Rishin Tiwari</h1>
        <h5 className="text-light">Data Analyst | Data Engineer | Data Scientist</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={Me} alt="My photo" />
        </div>

        <a href="#contact" className="scroll__down"> Scroll Down</a>
      </div>
      
    </header>
  )
}

export default Header