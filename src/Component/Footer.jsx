import React from 'react'
import footer from './footer.css'
import { AiTwotoneSound } from "react-icons/ai";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
    <h5>© COPYRIGHT FORD9 SOLUTIONS (PVT) LTD.</h5>
     <h6 className='line'>|</h6>
    <div className='pages'>
    <Link className="link" to={"/"} >HOME</Link>
     <Link  className="link" to={"about-us"}>ABOUT US</Link>
     <Link className="link" to={"contact-us"}>CONTACT US</Link>
     <Link className="link" to={"terms"}>TERMS</Link>
     <Link className="link" to={'privacy-policy'}>PRIVACY POLICY</Link></div>
     </div>
  )
}

export default Footer