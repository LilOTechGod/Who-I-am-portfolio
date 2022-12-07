import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {GrContact} from 'react-icons/gr'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setAvtiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setAvtiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome/></a>
      <a href="#about" onClick={() => setAvtiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FiUser/></a>
      <a href="#experience" onClick={() => setAvtiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} ><BiBook/></a>
      <a href="#services" onClick={() => setAvtiveNav('#services')} className={activeNav === '#services' ? 'active' : ''} ><RiServiceLine/></a>
      <a href="#contact" onClick={() => setAvtiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} ><GrContact/></a>
    </nav>
  )
}

export default Nav