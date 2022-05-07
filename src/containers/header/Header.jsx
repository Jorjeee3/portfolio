import React from 'react'
import { useState } from 'react'
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

import './header.css'

function Header() {
    const [burgerMenu, setBurgerMenu] = useState(false)

    const changeState = () => {
        setBurgerMenu(!burgerMenu)
    }

  return (
    <header className='header'>
        <div className='header-logo'>
            <Link to="/" className='header-link'>George's portfolio</Link>
        </div>
        <nav className={burgerMenu ? "header-nav active" : "header-nav"} onClick={() => setBurgerMenu(false)} >
            <div className='header-logo-nav'>
                <Link to="/" className='nav-link-logo'>George's portfolio</Link>
            </div>
            <ul className="header-list">
                <li className="header-item">
                    <Link to="/#projects" className="header-item-link" onClick={changeState}>Projects</Link>
                </li>
                <li className="header-item">
                    <Link to="/#about" className="header-item-link" onClick={changeState}>About me</Link>
                </li>
                <li className="header-item">
                    <Link to="/#skills" className="header-item-link" onClick={changeState}>Skills</Link>
                </li>
                <li className="header-item">
                    <Link to="contact" className="header-item-link header-link-contact">Contact me</Link>
                </li>
            </ul>
        </nav>
        <div className='burger-menu' >
            <input type="checkbox" id="checkbox1" className="checkbox1 visuallyHidden" />
            <label htmlFor="checkbox1">
                <div className={burgerMenu ? "hamburger hamburger1" : "hamburger"} onClick={changeState}>
                    <span className="bar bar1"></span>
                    <span className="bar bar2"></span>
                    <span className="bar bar3"></span>
                    <span className="bar bar4"></span>
                </div>
            </label>
        </div>
    </header>
  )
}

export default Header