import React from 'react'
import "./Project.css"
import projectData from '../data/projectData'

const Project = () => {

  return (
    <div className='Projects'>
      <p className='projects-made'> <i class="fa-solid fa-laptop-code"></i> Projects <span style={{color:"yellow"}}>Made</span></p>

      <div className="all-projects">
        {
          projectData.map((d)=>{
            return(
              <div className='box'>
                <img src={d.image} alt="" />
                <div className="content">
                  <h3>{d.name}</h3>
                  <div className='description'>
                    <p>{d.description}</p>
                    <div className='btn'>
                      <a href={d.view}><button>View</button></a>
                      <a href={d.code}><button>Code</button></a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Project