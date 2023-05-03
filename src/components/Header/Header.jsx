import React from 'react'
import { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import './styles.css'

function Header() {

const [ativo, setAtivo] = useState(false);

const handleMenuClick = () => {
  setAtivo(!ativo);
}

  return (
    <header>
        <nav className='navBar'>
            <a href="#home" className='logo'>F<span>oo</span>DP<span>ee</span>K</a>
            <ul className={`navMenu ${ativo ? 'ativo' : ''}`}>
                <li className='navItem'><a href="#home">Home</a></li>
                <li className='navItem'><a href="#about">About</a></li>
                <li className='navItem'><a href="#menu">Menu</a></li>
                <li className='navItem'><a href="#contact">Contact</a></li>
                <FaSearch className='searchIcon'/>
            </ul>
            <div className={`menu ${ativo ? 'ativo' : ''}`} onClick={handleMenuClick}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
            </div>
        </nav>
        
    </header>
  )
}

export default Header