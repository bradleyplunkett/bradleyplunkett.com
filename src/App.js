import './App.css';
import PlanetComponent from './components/SunandPlanets';

function App() {
  return (
    <div className = 'App' >
      <header className = 'App-header'>
        <p>Welcome to bradleyplunkett.com</p>
      </header>
      <div className='planet'>
      <PlanetComponent className = 'planet'></PlanetComponent>
      </div>
      </div>
  );
}

export default App;
