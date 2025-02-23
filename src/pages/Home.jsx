import "./Home.css"
import Hero from "../images/hero.svg"
import { useNavigate } from "react-router-dom"
import Typed from 'typed.js';
import React, { useEffect, useRef } from 'react';
const Home=()=>{
    const navigate=useNavigate()
    const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Welcome to my website', 'I am a Web Developer', 'React Enthusiast',
      'Full Stack Developer'],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);
    return (
        <div className="Home">
            <div className="about">
                        <p className="about1">Hi! I'm <span style={{ color: "red" }}>Rakesh Kumar</span></p>
                        <h3 className="about2"><span ref={el} style={{color:"cyan"}}></span></h3>
                        <p className="about3">As a passionate Web developer, I thrive on creating beautiful and <br />
                            intuitive websites that delight users</p>
                        <div className="contacts">
                            <a href="goo"><i className="fa-brands fa-whatsapp"></i></a>
                            <a href="sd"><i className="fa-brands fa-facebook"></i></a>
                            <a href="sdc"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="scd"><i className="fa-brands fa-github"></i></a>
                        </div>
                        <button onClick={()=>navigate("/about")}>About Me</button>
                    </div>
                    <div className="image">
                    <div className="home-img">
                        <img src={Hero} alt="" />
                    </div>
                    </div>
        </div>
    )
}
export default Home;