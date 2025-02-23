import React from 'react'
import "./Footer.css";
import image1 from "../images/1.png"
import image2 from "../images/2.png"
import image3 from "../images/3.png"

const Footer = () => {
  return (
    <div className='Footer'>
        <div className='copyright'>Rakesh Kumar © Copyright 2025</div>
        <div className='line line1'>
            <div className="wave wave1" style={{backgroundImage:`url(${image1})`}}></div>
        </div>
        <div className='line line2'>
            <div className="wave wave2" style={{backgroundImage:`url(${image2})`}}></div>
        </div>
        <div className='line line3'>
            <div className="wave wave3" style={{backgroundImage:`url(${image3})`}}></div>
        </div>
    </div>
  )
}

export default Footer