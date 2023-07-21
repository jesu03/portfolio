import React from 'react'
import './Topcontainer.css'
import {Element} from 'react-scroll';
import Topcontent from './Topcontent';
const Topcontainer = () => {
  return (
      <Element id="about" className="Topcontainer">
      <div className='Topcontainer__content'>
      <Topcontent/>
      </div>
      </Element>
  )
}

export default Topcontainer
