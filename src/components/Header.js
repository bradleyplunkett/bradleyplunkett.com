import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom'



function Header() {
    return (
        <header className='App-header'>
            <Link to='#scrolldowntest'>scroll down</Link>
        </header>
    )
}

export default Header