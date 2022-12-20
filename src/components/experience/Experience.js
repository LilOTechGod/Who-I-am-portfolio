import React from 'react'
import './experience.css'
import { AiOutlineCheckCircle } from 'react-icons/ai'

const Experience = () => {
  return (
    <section id='experience'>
      <h1>Technical Skills</h1>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>

            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>HTML 5</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>CSS 3</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Web APIs</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Third-party APIs</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Server-side APIs</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

          </div>
        </div>

        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>

            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>OOP</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Express</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>ORM</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>MVC</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

          </div>
        </div>

        <div className='experience__backend'>
          <h3>Full-stack Development</h3>
          <div className='experience__content'>

            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Computer Science</h4>
                <small className='text-light'>Compromise</small>
              </div>
            </article>

            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>NoSQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>PWA</h4>
                <small className='text-light'>Compromise</small>
              </div>
            </article>

            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>MERN</h4>
                <small className='text-light'>Compromise</small>
              </div>
            </article>

            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>State</h4>
                <small className='text-light'>Compromise</small>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience