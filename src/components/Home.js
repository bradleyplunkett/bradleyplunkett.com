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

            

            <p id ='scrolldowntest'> 
                    'I should appear if you click the button that scrolls here!'
                </p>
        </React.Fragment>
    )
}

export default Home