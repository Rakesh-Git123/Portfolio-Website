import React from 'react'
import "./About.css"
import MyImage from "../images/myphoto.jpg";
import Resume from "../Resume/RakeshCV.pdf"

const About = () => {
  return (
    <div className='About'>
      <div className="left">
        <div className="image">
          <img src={MyImage} alt="" />
        </div>
        <div className="details">
          <p><b>Name: </b>Rakesh kumar</p>
          <p><b>Profile: </b>Full stack developer</p>
          <p><b>Email: </b>rk11777916@gmail.com</p>
        </div>
      </div>
      <div className="right">
        <p className='p1'><i class="fa-solid fa-user"></i> About <span style={{ color: "yellow" }}>Me</span></p>
        <p className='p2'>I am Rakesh Kumar, pursuing BTech in Computer Science and Engineering from Lovely Professional University. I am      passionate about full-stack development, specializing in React, Node.js, Express, and MongoDB. I enjoy creating visually appealing and user-friendly web applications with seamless functionality.
          I focus on understanding user needs and client requirements to deliver tailored solutions that align with brand identity. I am committed to staying updated with the latest technologies and continuously improving my skills to build impactful digital experiences.</p>
        <a href={Resume} download="RakeshCV.pdf">
          <button>My Resume</button>
        </a>
      </div>

    </div>
  )
}

export default About