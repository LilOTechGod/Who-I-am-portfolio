import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='cpntact_options'>
          <article className='contact_option'>
            <h4>Email</h4>
            <h5>perezoscar360@gmail.com</h5>
            <a href='perezoscar360@gmail.com'>Send A Message</a>
          </article>
        </div>
        <form action=''></form>
      </div>
    </section>
  )
}

export default Contact