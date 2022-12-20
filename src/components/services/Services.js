import React from 'react'
import './services.css'
import {BsCardChecklist} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h1>What I Offer</h1>
      <h2>Services</h2>

      <div className='container services_container'>
        <article className='service'>
          <div className='service_head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BsCardChecklist className='service_list-icon' />
              <p>User Stories</p>
            </li>
            <li>
              <BsCardChecklist className='service_list-icon' />
              <p>Wireframes</p>
            </li>
            <li>
              <BsCardChecklist className='service_list-icon' />
              <p>Content Strategy</p>
            </li>
            <li>
              <BsCardChecklist className='service_list-icon' />
              <p>Information Architecture</p>
            </li>
            <li>
              <BsCardChecklist className='service_list-icon' />
              <p>Brand and Design system development</p>
            </li>
            <li>
              <BsCardChecklist className='service_list-icon' />
              <p>Design technology consulting</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service_head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BsCardChecklist className='service_list-icon' />
              <p>Web Design</p>
            </li>
            <li>
              <BsCardChecklist className='service_list-icon' />
              <p>Web development support and maintenance</p>
            </li>
            <li>
              <BsCardChecklist className='service_list-icon' />
              <p>Web hosting</p>
            </li>
            <li>
              <BsCardChecklist className='service_list-icon' />
              <p>Email Marketing</p>
            </li>
            <li>
              <BsCardChecklist className='service_list-icon' />
              <p>Web optimization</p>
            </li>
            <li>
              <BsCardChecklist className='service_list-icon' />
              <p>Search Engine Optimization</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service_head'>
            <h3>Content Creation</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BsCardChecklist className='service_list-icon' />
              <p>Content Strategy</p>
            </li>
            <li>
              <BsCardChecklist className='service_list-icon' />
              <p>Content Development</p>
            </li>
            <li>
              <BsCardChecklist className='service_list-icon' />
              <p>Content Creation</p>
            </li>
            <li>
              <BsCardChecklist className='service_list-icon' />
              <p>Content Optimization</p>
            </li>
            <li>
              <BsCardChecklist className='service_list-icon' />
              <p>Content Promotion</p>
            </li>
            <li>
              <BsCardChecklist className='service_list-icon' />
              <p>Content Reporting</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services