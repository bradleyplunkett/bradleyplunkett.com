import React from 'react'
import PlanetComponent from './SunandPlanets.js';
import { Link } from 'react-router-dom'

function Home() {
    return (
        <React.Fragment>
            <div className='planetContainer'>
                <div className='planet'>
                    <PlanetComponent className='planet' />
                </div>
            </div>

            <Link to = '/portfolio'> Click here to go to my portfolio</Link>

        </React.Fragment>
    )
}

export default Home