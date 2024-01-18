import React from 'react'
import './Footer.scss'
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { SiWhatsapp } from "react-icons/si";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer_main'>
        <div className="foot_left">
            <h3>About</h3>
            <p>Highly motivated and determined MERN STACK developer with a passion for building high-quality web applications. Seeking
a challenging and dynamic work environment where to utilize skills and experience to build innovative web applications and
contribute to the growth and success of the company. Eager to learn and grow as a developer and make a meaningful impact</p>
        </div>
        <div className="foot_right">
            <h3>Contact</h3>
            <p><FaPhone className='foot-icon' />+91 9562890504</p>
            <p><IoIosMail className='foot-icon-mail' />shamilmohd418@gmail.com</p>
            <p><FaLocationDot className='location-icon' />Perinthalmanna,Malappuaram,Kerala 679326</p>
            <div className="social-icons">
                <a href=" https://wa.me/9562890504"><SiWhatsapp className='socialIcons' /></a>
                <a href=""><RiFacebookFill className='socialIcons' /></a>
                <a href=""><FaTwitter className='socialIcons' /></a>
                <a href=""><FaInstagram className='socialIcons' /></a>
                <a href=""><FaLinkedinIn className='socialIcons' /></a>
                <a href=""><FaGithub className='socialIcons' /></a>
            </div>
        </div>
    </div>
  )
}

export default Footer
