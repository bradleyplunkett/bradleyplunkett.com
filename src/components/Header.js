import React from 'react'
import '../App.css';



function Header() {
    function handleContactClick (){
        const el = document.getElementById('contact')
        el.scrollIntoView({behavior: "smooth"})
    }

    return (
        <header className='App-header'>
            <p>"I am putting myself to the fullest possible use, which is all I think that any conscious entity can ever hope to do" - HAL 9000</p>
            {/* <a className="contactClass" href="#contact" >Contact</a> */}

        </header>
    )
}

export default Header

// add smooth={true} duration={1000} to Link