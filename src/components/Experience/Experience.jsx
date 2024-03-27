import React from 'react'
import './Experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill  className='experience_details-icon'/>
              <div>
                <h4>HTML</h4>
                <h6 className='text-light'>Experienced</h6>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>CSS</h4>
                <h6 className='text-light'>Intermediate</h6>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill  className='experience_details-icon'/>
              <div><h4>JavasScript</h4>
                <h6 className='text-light'>Basic</h6>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill  className='experience_details-icon'/>
              <div><h4>BootStrap</h4>
                <h6 className='text-light'>Experienced</h6>
              </div>
            </article>
          
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon' />
            <div><h4>Figma</h4>
              <h6 className='text-light'>Basic</h6>
            </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill  className='experience_details-icon'/>
            <div><h4>React</h4>
              <h6 className='text-light'>Basic</h6>
            </div>
          </article>
        </div>
      </div>
      
      <div className="experience_backend">
        <h3>Backend Development</h3>
        <div className="experience_content">
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon' />
            <div><h4>MySQL</h4>
              <h6 className='text-light'>Basic</h6>
            </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill  className='experience_details-icon'/>
            <div><h4>MongoDB</h4>
              <h6 className='text-light'>Basic</h6>
            </div>
          </article>
        </div>
      </div>
      
      </div>

    </section>
  )
}

export default Experience