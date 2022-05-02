import React from 'react'
// import { IconName } from "react-icons/fa";
import {BsTelegram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {ImInstagram} from 'react-icons/im'
// import { Link } from "react-router-dom";

import './telegram.css'

function Telegram() {
  return (
    <div className='container telegram-section'>
        <div className="media-block">
            <div>
                <a className='telegram-link' rel="noreferrer" href="https://www.instagram.com/p/Cc9H0FTNDPVE8DZba10Li8AniJa1ol-WZ75ERo0/?igshid=YmMyMTA2M2Y=" target="_blank">
                    <ImInstagram className='telegram-icon'/>
                </a>
            </div>
            <div>
                <a className='telegram-link' rel="noreferrer" href="https://telegram.me/george_borschevskiy" target="_blank">
                    <BsTelegram className='telegram-icon'/>
                </a>
            </div>
            <div>
                <a className='telegram-link' rel="noreferrer" href="https://www.linkedin.com/in/george-borschevskiy-b59150207/" target="_blank">
                    <BsLinkedin className='telegram-icon'/>
                </a>
            </div>
        </div>
        <div className="cv-block">
            <a href='../../cv/borschevskiy-frontend-dev(1).pdf' className='download-cv-link' download>
                dowload cv
            </a>    
        </div>
    </div>
  )
}

export default Telegram