import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

export const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/oscar-perez~hernandez/" target ="_blank"><BsLinkedin/></a>
        <a href="https://github.com/LilOTechGod" target ="_blank"><BsGithub/></a>
    </div>
  )
}
