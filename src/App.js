import './App.css';
import PlanetComponent from './components/SunandPlanets';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Main></Main>

      </BrowserRouter>

    </div>

  );
}

export default App;
