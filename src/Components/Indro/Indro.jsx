import React, { useEffect } from 'react'
import { HiBars3CenterLeft } from "react-icons/hi2";
import './Indro.scss'
// import { Link } from 'react-router-dom';

const Indro = () => {
 
    useEffect(() => {
        const cursor = document.querySelector('.cursor');
        const mouse = {
          x: 0,
          y: 0,
        };
        const cursorPosition = {
          x: 0,
          y: 0,
        };
    
        const tick = () => {
          cursorPosition.x += (mouse.x - cursorPosition.x) * 0.15;
          cursorPosition.y += (mouse.y - cursorPosition.y) * 0.15;
          cursor.style.transform = `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`;
          window.requestAnimationFrame(tick);
        };
    
        window.addEventListener('mousemove', (e) => {
          mouse.x = e.x;
          mouse.y = e.y;
        });
    
        tick();
      }, []);
      
  return (
    <div>
      <div className="nav-banner-section">
  <div className="navigation-bar">
    {/* ///////////curson////////////// */}
  <div className="cursor">
  <div className="cursor-circle"></div>
</div>
 {/* ///////////curson////////////// */}
      {/* ////////////////////OFCANVAS///////////////// */}

      <div className="ofcanvas-main"> <button className="button_nav" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
     <HiBars3CenterLeft className='Navbar_bar' />
</button>

<div className="offcanvas offcanvas-start" data-bs-backdrop="static" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
  <div className="offcanvas-header">
    {/* <h5 className="offcanvas-title" id="staticBackdropLabel">Offcanvas</h5> */}
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <div>
    <div className='nav-div'> <a href="#" className="navlinks">Home</a></div>
    <div className='nav-div'> <a href="" className="navlinks">About</a></div>
    <div className='nav-div'> <a className="navlinks">My Work</a></div>
    <div className='nav-div'> <a href="" className="navlinks">Services</a></div>
    <div className='nav-div'> <a href="" className="navlinks">Contact</a></div>
    </div>
  </div>
</div>
</div>

{/* ////////////////OFFCANVAS-END///////////// */}

{/* /////////////////NAVBAR////////////// */}
<div className="navbar-main">
    <div className="navbar">
        <div className="navitems">
          <div className="navlink"><a href="">HOME</a></div>
          <div className="navlink"><a href="">ABOUT</a></div>
          <div className="navlink"><a href="">MY WORKS</a></div>
          <div className="navlink"><a href="">SERVICES</a></div>
          <div className="navlink"><a href="">CONTACT</a></div>
        </div>
    </div>
</div>
{/* /////////////////NAVBAR-END////////////// */}
  </div>
    {/* /////////////NAME-BANNER//////////////// */}
    <div className="name-banner-main">
        <div className="name-banner-left">
          <div className="content">
            <p className='hi-am'>Hi I am..</p>
            <h1  data-aos="fade-up" className='name'>MOHAMMED <span>SHAMIL</span></h1>
            <div className="typewriter"><p className='typing'>I'm Web Developer</p></div>
            {/* <a href="./../public/Screenshot 2024-01-10 145343.png" download>Download CV</a> */}
          </div>
        </div>
        <div className="name-banner-right">
          <div className="photo"><img src="/IMG_6986-removebg.png" alt="" /></div>
        </div>
      </div>
   {/* /////////////NAME-BANNER-END//////////////// */}

  
    </div>
  
     

     

    </div>
  )
}

export default Indro
