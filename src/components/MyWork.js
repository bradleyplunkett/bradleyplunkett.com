import React from 'react'
import '../App.css'; //may not need this since this is already on App.js

const MyWork = () => {
    return (
        <section className="myWorkClass" id="myWork">
            <div>
                <p className='MyProjects'>
                    My Projects
                </p>
                <p>Wonderful Flowers</p>
                <p>ourCity</p>
                <img className='ourCity' src={require('../ourCity.png')} alt='ourCity' onClick={() => window.open("https://www.youtube.com/watch?v=-ov5oKu4JBY", "_blank")} />

                <div className='card'>
                    <div className='card-top'>
                        <h1>Card</h1>
                    </div>
                    <div className='card-body'>
                        <img className='wonderfulFlowers' src={require('../wonderfulFlowers.png')} alt='wonderfulFlowers' onClick={() => window.open("http://wonderful-flowers.herokuapp.com/", "_blank")} />
                    </div>
                    <div>
                        <p> Card component rendered inside a container </p>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default MyWork
