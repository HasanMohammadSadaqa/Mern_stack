import { Router } from '@reach/router';
import './App.css';
import Welcome from './components/Welcome';
import NumberOrWordStyling from './components/NumberOrWordStyling';
import NumberOrWord from './components/NumberOrWord'

function App() {
  return (
    <div className="App">
      <Router>
        <Welcome path='/home'></Welcome>
        <NumberOrWord path='/:input'></NumberOrWord>
        <NumberOrWordStyling path='/:input/:color/:bgcolor'></NumberOrWordStyling>
      </Router>
    </div>
  );
}

export default App;
