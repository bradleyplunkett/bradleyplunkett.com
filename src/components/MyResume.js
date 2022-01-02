import React from 'react'
import '../App.css'; //may not need this since this is already on App.js

const MyResume = () => {
    return (
        <section className="myResumeClass" id="myResume">
            <div>
                <p >
                    This is where you can view my resume.            </p>
                    <div className = 'ResumeContainer'>
                    <iframe title = 'resume' src="https://resume.creddle.io/embed/egxl59xhe7m"
  width="850" height="1100" seamless></iframe>
                    </div>
                
            </div>
        </section>
    )
}

export default MyResume
