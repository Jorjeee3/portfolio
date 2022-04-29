import React from 'react'

import './card.css'

function Card(props) {
  return (
    <div className='card'>
        <a 
          href={props.demo} 
          className='demo-link-mage' 
          rel="noreferrer" 
          target='_blank'
        ><img src={props.image} alt={props.title} className='card-image'/></a>
        <div className="wrapper-links">
          <div className="wrapper-demo-link">
            <a 
              href={props.demo} 
              className='demo-link' 
              rel="noreferrer" 
              target='_blank'
            >{props.title}</a>
          </div>
          <div className="wrapper-code-link">
            <a 
              href={props.code} 
              className='code-link' 
              rel="noreferrer" 
              target='_blank'
            >Link to code</a>
          </div>
        </div>
    </div>
  )
}

export default Card