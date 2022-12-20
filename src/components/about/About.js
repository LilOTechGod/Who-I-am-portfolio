import React from 'react'
import './about.css'
import Me from '../../assets/20221119_113103.jpg'
import {FaAward} from 'react-icons/fa'
import {AiOutlineUser} from 'react-icons/ai'
import {FcOpenedFolder} from 'react-icons/fc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About me</h2>

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
              <h5>Experience</h5>
              <small>4 Months working</small>
            </article>

            <article className='about__card'>
              <AiOutlineUser className='about__icons'/>
              <h5>Clients</h5>
              <small>5 local clients</small>
            </article>

            <article className='about__card'>
              <FcOpenedFolder className='about__icons'/>
              <h5>Projects</h5>
              <small>3 completed projects & 16 mini projects</small>
            </article>
          </div>

          <p>
          Passionate and solutions-driven full stack web developer with a full-stack web development certificate from The University Of Texas, Austin. To provide unique perspectives on how end-users interact with websites and software platforms is the goal as a competitive candidate. Innovative problem-solver who is passionate about developing apps with a focus on mobile-first design and development. Strengths in creativity, teamwork, and building projects from ideation to execution.  Experience in 3D design utilizing a combination of strong communication, collaboration, and analytical skills. Strong ability to design, build, and maintain websites from conception to production. Ability to work in a fast-paced and diverse team environment developing solutions and exceeding expectations.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Connect!</a>
        </div>
      </div>
    </section>
  )
}

export default About