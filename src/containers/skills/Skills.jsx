import React from 'react'

import './skills.css'

function Skills() {
  return (
    <div className='container skills-section' id='skills'>
        <h2 className="section-title">
            Skills
        </h2>
        <div className="skills-content">
          <div className="skills-block">

            <div className="skills-soft">
              <h4 className="skills-title">
                Soft Skills
              </h4>
              <ul className="skills-list">
                <li className="skills-item">
                  <span className="skill">
                    Skilled in multitasking and working on several projects.
                  </span>
                </li>
                <li className="skills-item">
                  <span className="skill">
                    Well-organized with an ability to prioritize tasks.
                  </span>
                </li>
                <li className="skills-item">
                  <span className="skill">
                    Strong communication, collaboration and team building skills.
                  </span>
                </li>
                <li className="skills-item">
                  <span className="skill">
                    Highly motivated, proactive personality.
                  </span>
                </li>
              </ul>
            </div>

            <div className="skills-hard">
              <h4 className="skills-title">
                Hard Skills
              </h4>
              <ul className="skills-list">
                <li className="skills-item">
                  <span className="skill">- HTML5</span>
                </li>
                <li className="skills-item">
                  <span className="skill">- CSS3, Flexbox, Block, Grid</span>
                </li>
                <li className="skills-item">
                  <span className="skill">- JavaScript</span>
                </li>
                <li className="skills-item">
                <span className="skill">- Git (GitHub)</span>
                </li>
                <li className="skills-item">
                  <span className="skill">- Adobe XD</span>
                </li>
                <li className="skills-item">
                  <span className="skill">- Figma</span>
                </li>
                <li className="skills-item">
                  <span className="skill">- React.js (basic level)</span>
                </li>
                <li className="skills-item">
                  <span className="skill">- English (B2)</span>
                </li>
                <li className="skills-item">
                  <span className="skill">- Webpack 4, Gulp</span>
                </li>
                <li className="skills-item">
                  <span className="skill">- SCSS</span>
                </li>
                <li className="skills-item">
                  <span className="skill">- Photoshop</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        

    </div>
  )
}

export default Skills