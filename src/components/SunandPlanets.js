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
			orbitRadius={260}
			rotation={0}
			open
			autoClose
			mass={4}
      tension={500}
      friction={30}
		>
			<div
				style={{
					height: 100,
					width: 100,
					borderRadius: '50%',
					backgroundColor: '#94b0da',
					backgroundImage: "url(" + "https://media.istockphoto.com/photos/rocky-surface-picture-id607274254" + ")"
				}}
			/>
			<div
				style={{
					height: 50,
					width: 50,
					borderRadius: '50%',
					backgroundColor: '#dcedff',
					backgroundImage: "url(" + "https://www.gardeningknowhow.com/wp-content/uploads/2013/06/moss.jpg" + ")"
				}}
			/>
				<div
				style={{
					height: 75,
					width: 75,
					borderRadius: '50%',
					backgroundColor: '#dcedff',
					backgroundImage: "url(" + "https://s3.envato.com/files/243604517/preview.jpg" + ")"
				}}
			/>
		</Planet>
    )
  }
}

export default PlanetComponent; 

//["dcedff","94b0da","8f91a2","505a5b","343f3e"]