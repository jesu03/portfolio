import React from 'react'
import './Contact.css'
import { Element } from 'react-scroll'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
const Contact = () => {
  return (
    <Element className='contact' id='contact'>
    <h1>Contact Us</h1>
    <h4>If you have any suggestion,please fill out the form below and I will reply you shortly.</h4>
    <div className='contact__content'>
      <form className='contact__form'>
        <lable>Name</lable> <br></br>
        <input /> <br></br>
        <lable>Email</lable> <br></br> 
        <input />  <br></br>
        <lable>Drop a Message</lable> <br></br> 
        <textarea />  <br></br>
        <button>Submit</button> 
      </form>
      <div className="contact__personal">
      <div className="contact__personal__icon1">
      <PlaceOutlinedIcon />
      </div>
      <h3>5/102,South Street,South Sinthalakattai,Kurukkuchalai,Thoothukudi</h3>
      <div className="contact__personal__icon2">
      <WhatsAppIcon />
      </div>
      <h3>9345406505</h3>
      <div className="contact__personal__icon3">
      <MailOutlineIcon />
      </div>
      <h3>jesupandian2510@gmail.com</h3>
      </div>
    </div>
    </Element>
  )
}

export default Contact
