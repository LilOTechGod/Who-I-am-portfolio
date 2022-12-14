import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/20221119_113103.jpg'
import {HeaderSocials} from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Oscar Perez~Hernandez</h1>
        <h5>Junior Fullstack Developer</h5>
        <div id="bigBtn">
        <CTA/>
        </div>
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header