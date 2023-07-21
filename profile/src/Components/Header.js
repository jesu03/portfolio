import React from 'react'
import {Link} from 'react-scroll';
import './Header.css';
const Header = () => {
  return (
    <div className='Header'>
    <div className='Header__left'>
      <h2>Develop<span>er</span></h2>
    </div>
    <div className='Header__right'>
      <Link to="home" smooth={true} duration={200}>
      <h4>Home</h4>
      </Link>
      <Link to="about" smooth={true} duration={200}>
      <h4>About us</h4>
      </Link>
      <Link to="skill" smooth={true} duration={200}>
      <h4>Skills</h4>
      </Link>
      <Link to="project" smooth={true} duration={200}>
      <h4>Projects</h4>
      </Link>
      <Link to="contact" smooth={true} duration={200}>
      <h4>Contact</h4>
      </Link>
    </div>
    </div>
  )
}

export default Header
