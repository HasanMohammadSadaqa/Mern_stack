import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router';
import HomePage from './components/HomePage';
import WordOrNumber from './components/WordOrNumber';
import Colores from './components/Colores';

function App() {
  return (
    <div className="App">
      <Router>
        <HomePage path="/home"></HomePage>
        <WordOrNumber></WordOrNumber>
        <Colores></Colores>
      </Router>
    </div>
  );
}

export default App;
