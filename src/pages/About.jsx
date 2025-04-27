import React, { useEffect } from 'react'
import "./About.css"
import MyImage from "../images/myphoto.jpg";
import Resume from "../Resume/RakeshCV.pdf"

const About = () => {
  useEffect(() => {
    document.title = "About - Rakesh's Portfolio";
  }, []);
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
        <p className='p2'>Pursuing a BTech in Computer Science and Engineering from Lovely Professional University, with a strong passion for full-stack development. Specializes in building dynamic and responsive web applications using React, Node.js, Express, and MongoDB. Dedicated to crafting user-friendly interfaces and seamless functionality that cater to both user needs and client goals. Focused on delivering customized solutions that reflect brand identity while ensuring optimal performance. Continuously learning and staying updated with the latest technologies to create impactful and engaging digital experiences.</p>
        <a href={Resume} download="RakeshCV.pdf">
          <button>My Resume</button>
        </a>
      </div>

    </div>
  )
}

export default About