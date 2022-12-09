import React from 'react'
import './contact.css'
import {GrMailOption} from 'react-icons/gr'
import {AiOutlineMessage} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <GrMailOption className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>perezoscar360@gmail.com</h5>
            <a href='mailto:perezoscar360@gmail.com' target='_blank'>Send An Email </a>
          </article>
          <article className='contact_option'>
            <AiOutlineMessage className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>LinkedIn</h5>
            <a href='https://www.linkedin.com/in/oscar-perez~hernandez/' target='_blank'>Send A Message</a>
          </article>
          <article className='contact_option'>
            <BsGithub className='contact_option-icon'/>
            <h4>Github</h4>
            {/*  */}
            <a href='https://github.com/LilOTechGod' target='_blank'>View GitHub</a>
          </article>
        </div>
        {/* End of contact options */}
        <form action=''>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact