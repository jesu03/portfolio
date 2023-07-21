import React from 'react'
import {Link} from 'react-scroll';
import './Topcontent.css'
const Topcontent = () => {
  return (
    <div className='Topcontent'> 
      <div className='Topcontent__container'>
      <h1>Mr. JesuJeyamani</h1>
      <h2>I'm a Professional Web Developer</h2>
      <a href='www.google.com'>
      <button className='Topcontent__container__download'>Download CV</button>
      </a>
      <Link to='project' smooth={true} duration={200} >
      <button className='Topcontent__container__probutton'>Projects</button>
      </Link>
      </div>
      
    </div>
  )
}

export default Topcontent
