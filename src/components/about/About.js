import React from 'react'
import './about.css'
import Me from '../../assets/me3.img.jpg'
import {FaAward} from 'react-icons/fa'
import {AiOutlineUser} from 'react-icons/ai'
import {FcOpenedFolder} from 'react-icons/fc'

const About = () => {
  return (
    <section id='about'>
      <div className='subtitle'>
          <h3>Get to Know</h3>
          <h1>About me</h1>
      </div>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icons'/>
              <h4>Experience</h4>
              <small>1 year</small>
            </article>

            <article className='about__card'>
              <AiOutlineUser className='about__icons'/>
              <h4>Clients</h4>
              <small>3 local clients</small>
            </article>

            <article className='about__card' id="column">
              <FcOpenedFolder className='about__icons'/>
              <h4>Projects</h4>
              <small>3 completed projects</small>
            </article>
          </div>

          <p>
          Passionate and solutions-driven full stack web developer. Provide unique perspectives on how end-users interact with websites and software platforms is my goal. Innovative problem-solver who is passionate about developing apps with a focus on mobile-first design and development. Strengths in creativity, teamwork, and building projects from ideation to execution. Utilizing a combination of strong communication, collaboration, and analytical skills. Strong ability to design, build, and maintain websites from conception to production. Ability to work in a fast-paced and diverse team environment resulting in developing solutions and exceeding expectations.
          </p>

          <a href='#contact' className='btn btn-primary' id="bigBtn1">Let's Connect!</a>
          
        </div>
      </div>
    </section>
  )
}

export default About