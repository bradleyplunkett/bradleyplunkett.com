import React from 'react';
import PlanetComponent from './SunandPlanets.js';
import '../App.css';
import Header from './Header.js';
import Footer from './Footer.js';


function Main() {
    return (
        <div className='App' >
            <Header/>
            <div className='planetContainer'>
                <div className='planet'>
                    <PlanetComponent className='planet'></PlanetComponent>
                </div>
            </div>
            <Footer/>
        </div>)
}

export default Main