import React from 'react'
import '../App.css';



function Header() {
    function handleContactClick (){
        const el = document.getElementById('contact');
        el.scrollIntoView({behavior: "smooth"})
    }

    return (
        <header className='App-header'>
            <p>I am the header component.</p>
            {/* <a className="contactClass" href="#contact" >Contact</a> */}
            <a className="contactClass" onClick={handleContactClick} >Contact</a>

        </header>
    )
}

export default Header

// add smooth={true} duration={1000} to Link