import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/rishin-tiwari0807/" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/RishinTiwari" target='_blank'><FaGithub /></a>
        {/* <a href="https://www.linkedin.com/in/mukul-jeswani2211/" target='_blank'></a> */}
    </div>
  )
}

export default HeaderSocials