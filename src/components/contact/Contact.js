import React from 'react'
import './contact.css'
import {GrMailOption} from 'react-icons/gr'
import {AiOutlineMessage} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import {FiSend} from 'react-icons/fi'
import {CiViewTimeline} from 'react-icons/ci'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qpfj2hj', 'template_8sk8yfc', form.current, 'E1qXcK8t9ZihRVW5a')
  
  e.target.reset()
  };

  return (
    <section id='contact'>
      <div className='subtitle'>
        <h1>Get In Touch</h1>
        <h2>Contact Me</h2>
      </div>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <GrMailOption className='contact_option-icon' id="greenIcon"/>
            <h4>Email:</h4>
            <h5>perezoscar360@gmail.com</h5>
            <a href='mailto:perezoscar360@gmail.com' target='_blank'>Send An Email  </a><FiSend/>
          </article>
          <article className='contact_option'>
            <AiOutlineMessage className='contact_option-icon'/>
            <h4>Messenger:</h4>
            <h5>LinkedIn</h5>
            <a href='https://www.linkedin.com/in/oscar-perez~hernandez/' target='_blank'>Send A Message</a><FiSend/>
          </article>
          <article className='contact_option'>
            <BsGithub className='contact_option-icon'/>
            <h4>Github:</h4>
            <a href='https://github.com/LilOTechGod' target='_blank'>View GitHub</a><CiViewTimeline/>
          </article>
        </div>
        </div>
        {/* End of contact options */}
        
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required ></textarea>
          <div className='title'>
            <button type='submit' className='btn btn-primary' id="bigSend">Send</button>
          </div>
        </form>
      
    </section>
  )
}

export default Contact