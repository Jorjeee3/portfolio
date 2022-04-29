import React from 'react'
import {projects} from '../../projects.js'
import { useState, useEffect } from 'react';
import Card from '../../components/card/Card';

import './projects.css'

function Projects() {

  const [workProjects, setWorkProjects] = useState([])
  

  useEffect(() => {
    setWorkProjects(projects)
  }, [])

  return (
    <div id='projects' className="container projects-section">
      <h2 className="section-title">
        Projects
      </h2>
      <ul className="projects-list">
        {workProjects.map((workProject) => {
          return (
            <li className="project-item" key={workProject.id}>
              <Card demo={workProject.demo} image={workProject.image} code={workProject.code} title={workProject.title} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Projects