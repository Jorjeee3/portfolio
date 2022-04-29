import React from 'react'
import Projects from '../../containers/projects/Projects';
import About from '../../containers/about/About';
import Skills from '../../containers/skills/Skills';

function Home() {
  return (
    <div className='Home'>
        <About />
        <Projects />
        <Skills />
    </div>
  )
}

export default Home