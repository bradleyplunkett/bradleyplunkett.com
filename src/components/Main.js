import React from 'react';
import PlanetComponent from './SunandPlanets.js';
import '../App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Portfolio from './Portfolio.js';
import Home from './Home.js';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Link from 'react-scroll'




function Main() {
    return (
        <React.Fragment>
            <Header/>
            <Home/>
            {/* <Switch>
                <Route path='/home' component={Home} />
                <Route path='/portfolio' component={Portfolio} />
                <Redirect to='/home' />
            </Switch> */}
            <Footer />
        </React.Fragment>)
}

export default withRouter(Main)