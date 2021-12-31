import React from 'react'
import PlanetComponent from './SunandPlanets.js';
import Link from 'react-scroll'
import Contact from './ContactForm.js';

function Home() {
    return (
        <React.Fragment>
            <div className='planetContainer'>
                <div className='planet'>
                    <PlanetComponent className='planet' />
                </div>
            </div>

            {/* <Link className = 'contactClass' to= 'contact' smooth = {true} duration = {1000}>Contact</Link> */}
        </React.Fragment>
    )
}

export default Home