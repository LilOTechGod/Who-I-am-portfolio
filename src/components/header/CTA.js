import React from 'react'
import resume from '../../assets/OscarP-HHBEngineeringResume.pdf'

const CTA = () => {
  return (
    <div className= 'cta'>
        <a href={resume} className='btn' target ="_blank">Resume</a>
        <a href="#contact" className='btn btn-primaryjj'>Let's Talk</a>
    </div>
  )
}

export default CTA