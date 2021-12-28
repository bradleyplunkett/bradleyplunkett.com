import './App.css';
import PlanetComponent from './components/SunandPlanets';

function App() {
  return (
    <div className='App' >
      <header className='App-header'>
        <p>Welcome </p>
      </header>
        <div className = 'planetContainer'>
        <div className='planet'>
          <PlanetComponent className='planet'></PlanetComponent>
        </div>
      </div>
    </div>
  );
}

export default App;
