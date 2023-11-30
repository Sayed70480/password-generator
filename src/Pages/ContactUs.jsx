import React from 'react'
import contactus from './contactus.css'
import { FaRegAddressCard } from 'react-icons/fa6';
import { BsWhatsapp } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
function ContactUs() {
  return (
    <div className='conatact-main'>
      <h2 className='heading'>CONTACT US</h2>
      <div className='content'> <FaRegAddressCard className='icon'/> <h6> Opposite brother CNG Vertex software park
      Amankot Mingora Swat Pakistan</h6></div>
      <div className='content'>< BsWhatsapp  className='icon'/><h6> +92 334 932 8863</h6></div>
      <div className='content'> <AiOutlineMail  className='icon'/>  <h6> info@fordnine.com</h6></div>
    
      
    
    </div>
  )
}

export default ContactUs