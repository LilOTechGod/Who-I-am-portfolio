import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {GrContactInfo} from 'react-icons/gr'

const Nav = () => {
  return (
    <nav>
      <a href="#"><FaHome/></a>
      <a href="#about"><FiUser/></a>
      <a href="#experience"><BiBook/></a>
      <a href="#services"><RiServiceLine/></a>
      <a href="#contact"><GrContactInfo/></a>
    </nav>
  )
}

export default Nav