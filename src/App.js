import logo from './logo.svg';
import './App.css';
import PlanetComponent from './components/planetComponent';

function App() {
  return (
    <div className = 'main' >
      <h1>Bradley</h1>
      <div className='planet'>
      <PlanetComponent className = 'planet'></PlanetComponent>
      </div>
      </div>
  );
}

export default App;
