import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom'



function Header() {
    return (
        <header className='App-header'>
            <p>I am the header component.</p>
            <Link className="contactClass" to="contact" >Contact</Link>
        </header>
    )
}

export default Header

// add smooth={true} duration={1000} to Link