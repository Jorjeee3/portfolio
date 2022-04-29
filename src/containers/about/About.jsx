import React from 'react'
import leftPhoto from '../../images/left-min.png'
import rightPhoto from '../../images/right-min.png'
import mobilePhoto from '../../images/mobile-min.png'

import './about.css'

function About() {
  return (
    <div id='about' className="container about-section">
        <h2 className='section-title'>About me</h2>
        <div className="about-content">

          <div className="about-introdaction">
            <div className="image-wrapper">
                <img src={leftPhoto} alt="" className='about-image' />
                <img src={mobilePhoto} alt="" className='about-mobile-image' />
            </div>
            <div className="about-description">
              <p className='description'>Hello everyone, I'm George Borschevskyi !</p>
              <p className='description'>
                I have been learning frontend development since winter 2021
                I became interested in the field of web development by the time I graduated from college, 
                and after that I signed up for the frontend basic course
                (By the way, the specialty in which I studied is not related to information technology, 
                but in September 2021 I entered the computer science specialty at the university).
                After completing the course, I began to dig for information and develop in this direction: 
                I completed the basic Javascript course and studied myself on public and paid resources: mainly on YouTube and Udemy.
              </p>
            </div>
          </div>

          <div className="about-opinion">
            <div className="about-description">
              <p className='description'>
                The field of web development is also very interesting to me in general; 
                I do not exclude the possibility that in future I will face adjacent spheres, 
                since everything is interconnected here. Therefore, I try to absorb as many different
                knowledge as possible, focusing on the Front-end industry.
              </p>
            </div>
            <div className="image-wrapper">
                <img src={rightPhoto} alt="" className='about-image' />
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default About