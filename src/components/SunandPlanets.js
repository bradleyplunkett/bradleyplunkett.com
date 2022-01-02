import React, { Component } from 'react';
import { Planet } from 'react-planet';
import { Link } from 'react-router-dom'
import '../App.css'; //may not need this since this is already on App.js


class PlanetComponent extends Component {

	handleMyWorkClick() {
		const el = document.getElementById('myWork')
		el.scrollIntoView({ behavior: "smooth" })
	}

	handleMyResumeClick() {
		const el = document.getElementById('myResume')
		el.scrollIntoView({ behavior: "smooth" })
	}

	handleMyRunsClick() {
		const el = document.getElementById('myRuns')
		el.scrollIntoView({ behavior: "smooth" })
	}

	render() {
		return (
			<Planet
				centerContent={
					<div
						style={{
							height: 300,
							width: 300,
							borderRadius: '50%',
							backgroundColor: 'white',
							backgroundImage: "url(" + "http://www.nasa.gov/sites/default/files/canyon-fire_0.jpg" + ")",
							backgroundSize: 'cover',
							cursor: 'pointer'

						}}
					/>
				}
				orbitRadius={260}
				rotation={0}
				open
				autoClose
				mass={4}
				tension={500}
				friction={30}
			>
				<div onClick={this.handleMyWorkClick.bind(this)} 
					style={{
						height: 100,
						width: 100,
						borderRadius: '50%',
						backgroundColor: '#94b0da',
						backgroundImage: 'url(' + require('../keyboardpic.png') + ')',
						backgroundSize: 'cover',
						cursor: 'pointer'
					}}
				>
					
				</div>
				<div onClick={this.handleMyRunsClick.bind(this)} 
					style={{
						height: 100,
						width: 100,
						borderRadius: '50%',
						backgroundColor: '#94b0da',
						backgroundImage: 'url(' + require('../runningpic.png') + ')',
						backgroundSize: 'cover',
						cursor: 'pointer'

					}}
				/>
				<div onClick={this.handleMyResumeClick.bind(this)} 
					style={{
						height: 100,
						width: 100,
						borderRadius: '50%',
						backgroundColor: '#94b0da',
						backgroundImage: 'url(' + require('../headshotpic.png') + ')',
						backgroundSize: 'cover',
						cursor: 'pointer'

					}}
				/>
			</Planet>
		)
	}
}

export default PlanetComponent;

//["dcedff","94b0da","8f91a2","505a5b","343f3e"]