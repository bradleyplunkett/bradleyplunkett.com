import React, { Component } from 'react';
import { Planet } from 'react-planet';


class PlanetComponent extends Component {
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
						backgroundSize: 'cover'
					}}
				/>
			}
			orbitRadius={240}
			rotation={0}
			open
			autoClose
		>
			<div
				style={{
					height: 70,
					width: 70,
					borderRadius: '50%',
					backgroundColor: '#94b0da',
				}}
			/>
			<div
				style={{
					height: 70,
					width: 70,
					borderRadius: '50%',
					backgroundColor: '#dcedff',
				}}
			/>
				<div
				style={{
					height: 70,
					width: 70,
					borderRadius: '50%',
					backgroundColor: '#dcedff',
				}}
			/>
		</Planet>
    )
  }
}

export default PlanetComponent; 

//["dcedff","94b0da","8f91a2","505a5b","343f3e"]