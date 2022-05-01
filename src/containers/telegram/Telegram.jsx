import React from 'react'
// import { IconName } from "react-icons/fa";
import {BsTelegram} from 'react-icons/bs'
import { Link } from "react-router-dom";

import './telegram.css'

function Telegram() {
  return (
    <div className='container telegram-section'>
        <div className="telegram-block">
            <Link className='telegram-link' to={"https://telegram.me/george_borschevskiy"} target="_blank">You can text me on telegram :)</Link>
            <BsTelegram className='telegram-icon'/>
        </div>
        <div className="cv-block">
            <span>download my cv</span>
            <input type="file" accept='../../cv/borschevskiy-frontend-dev(1).pdf'/>
        </div>
    </div>
  )
}

export default Telegram