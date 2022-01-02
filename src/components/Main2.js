import React from 'react'
import PlanetComponent from './SunandPlanets.js';
import MyWork from './MyWork.js';
import MyRuns from './MyRuns.js';
import MyResume from './MyResume.js';

function Home() {
    return (
        <React.Fragment>
            <div className='planetContainer'>
                <div className='planet'>
                    <PlanetComponent className='planet' />
                </div>
            </div>

            <MyWork/>
            <MyRuns/>
            <MyResume/>

        </React.Fragment>
    )
}

export default Home