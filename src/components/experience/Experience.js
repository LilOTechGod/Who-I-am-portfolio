import React from 'react'
import './experience.css'
import { AiOutlineCheckCircle } from 'react-icons/ai'

const Experience = () => {
  return (
    <section id='experience'>
      <div className='subtitle'>
        <h1>Technical Skills</h1>
        <h2>My Experience</h2>
      </div>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3 className='techTitle'>Frontend Development</h3>
          <div className='experience__content'>

            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>HTML 5</h4>
              </div>
            </article>

            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>CSS 3</h4>
              </div>
            </article>

            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>

            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Web APIs</h4>
              </div>
            </article>

            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>HTTP Request</h4>
              </div>
            </article>

            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Event Driven Programming</h4>
              </div>
            </article>

          </div>
        </div>

        <div className='experience__backend'>
          <h3 className='techTitle'>Backend Development</h3>
          <div className='experience__content'>

            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Node JS</h4>
              </div>
            </article>

            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>OOP</h4>
              </div>
            </article>

            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Express</h4>
              </div>
            </article>

            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
              </div>
            </article>

            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>TDD</h4>
              </div>
            </article>

            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>MVC</h4>
              </div>
            </article>

          </div>
        </div>

        <div className='experience__backend'>
          <h3 className='techTitle'>Full-stack Development</h3>
          <div className='experience__content'>

            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Cryptography</h4>
              </div>
            </article>

            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Database</h4>
              </div>
            </article>

            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>QA Process</h4>
              </div>
            </article>

            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>AWS/HEROKU</h4>
              </div>
            </article>

            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>MERN Apps</h4>
              </div>
            </article>

            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Agile Methodology</h4>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience