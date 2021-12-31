import React from 'react'
import PlanetComponent from './SunandPlanets.js';
import Contact from './ContactForm.js';

function Home() {
    return (
        <React.Fragment>
            <div className='planetContainer'>
                <div className='planet'>
                    <PlanetComponent className='planet' />
                </div>
            </div>

            <Contact/>

        </React.Fragment>
    )
}

export default Home