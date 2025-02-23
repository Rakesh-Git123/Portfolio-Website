import React, { useEffect } from 'react'
import "./Skills.css"
const Skills = () => {
  useEffect(() => {
    document.title = "Skills - Rakesh's Portfolio";
  }, []);
  return (
    <div className='Skills'>
      <p className='skills-abilities' style={{ textAlign: "center" }}> <i class="fa-solid fa-laptop-code"></i> Skills & <span style={{ color: "yellow" }}>Abilities</span></p>
      <div className="tech-profe">
        <div className="technical">
          <div className="html tech">
            <i class="fa-brands fa-html5"></i>
            <div className="text-perc">
              <p className='text'>HTML</p>
              <p className='perc'>90%</p>
            </div>
            <div className='crossbar'><div className='crossbar-child'></div></div>
          </div>

          <div className="css tech">
            <i class="fa-brands fa-css3-alt"></i>
            <div className="text-perc">
              <p className='text'>CSS</p>
              <p className='perc'>70%</p>
            </div>
            <div className='crossbar'><div className='crossbar-child'></div></div>
          </div>

          <div className="javascript tech">
            <i class="fa-brands fa-js"></i>
            <div className="text-perc">
              <p className='text'>Javasript</p>
              <p className='perc'>75%</p>
            </div>
            <div className='crossbar'><div className='crossbar-child'></div></div>
          </div>

          <div className="react tech">
            <i class="fa-brands fa-react"></i>
            <div className="text-perc">
              <p className='text'>ReactJs</p>
              <p className='perc'>80%</p>
            </div>
            <div className='crossbar'><div className='crossbar-child'></div></div>
          </div>

          <div className="node tech">
            <i class="fa-brands fa-node-js"></i>
            <div className="text-perc">
              <p className='text'>NodeJs</p>
              <p className='perc'>65%</p>
            </div>
            <div className='crossbar'><div className='crossbar-child'></div></div>
          </div>

          <div className="mongo tech">
            <i class="fa-solid fa-database"></i>
            <div className="text-perc">
              <p className='text'>MongoDB</p>
              <p className='perc'>75%</p>
            </div>
            <div className='crossbar'><div className='crossbar-child'></div></div>
          </div>

          <div className="java tech">
            <i class='bx bxl-java'></i>
            <div className="text-perc">
              <p className='text'>Java</p>
              <p className='perc'>80%</p>
            </div>
            <div className='crossbar'><div className='crossbar-child'></div></div>
          </div>
        </div>

        <div className="soft-skills">
          <div className="container">
            <div className="circular-progress1 circular-progress">
              <span className="progress-value">70%</span>
            </div>
            <span className="text">Creativity</span>
          </div>

          <div className="container">
            <div className="circular-progress2 circular-progress">
              <span className="progress-value">80%</span>
            </div>
            <span className="text">Problem Solving</span>
          </div>

          <div className="container">
            <div className="circular-progress3 circular-progress">
              <span className="progress-value">75%</span>
            </div>
            <span className="text">Adaptability</span>
          </div>

          <div className="container">
            <div className="circular-progress4 circular-progress">
              <span className="progress-value">70%</span>
            </div>
            <span className="text">Leadership</span>
          </div>
         
        </div>
      </div>

    </div>
  )
}

export default Skills