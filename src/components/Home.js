import React from 'react'
import PlanetComponent from './SunandPlanets.js';


function Home() {
    return (
        <div className='planetContainer'>
            <div className='planet'>
                <PlanetComponent className='planet'/>
            </div>
        </div>)
}

export default Home