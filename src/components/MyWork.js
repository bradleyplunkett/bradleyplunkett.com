import React from 'react'
import '../App.css'; //may not need this since this is already on App.js

const MyWork = () => {
    return (
        <section className="myWorkClass" id="myWork">
            <div>
                <p >
                    My Projects           </p>
                    <img className = 'wonderfulFlowers' src = {'url(' + require('../keyboardpic.png') + ')'} alt = 'wonderfulFlowers'></img>
            </div>
        </section>
    )
}

export default MyWork
