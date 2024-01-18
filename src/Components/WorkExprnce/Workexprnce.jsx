import React, { useEffect, useState } from 'react'
import './WorkExpence.scss'
import { Link } from 'react-scroll';
// import motion from 'framer-motion'

const Workexprnce = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const triggerPoint = window.innerHeight * 0.7; // Adjust this value as needed

    if (scrollY > triggerPoint) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div  className={`wrkExperienceMain ${isVisible ? 'fade-up' : ''}`}>
    <div className="heading">
    <h1>My Work <span>Experience</span></h1>
    </div>
    <div className="expirience">
        <div className="expirience_left">
          <div className="Exprnce_left_contents">
          <h4>Synnefo Solutions Pvt.ltd</h4>
            <p>June 2023 - January 2024</p>
          </div>
        </div>
        <div className="line"></div>
        <div className="expirience_right">
            <div className="expirience_contents">
            <h4>MERN Stack Developer</h4>
            <p>I have successfully completed a 6-month internship with the MERN stack in Synnefo Solutions Pvt.Ltd.</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Workexprnce
