import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import Form from './components/Form';
import { Router } from '@reach/router';
import DeleteButton from './components/DeleteButton';
import Home from './components/Home';
import Status from './views/Status';


function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/players/list" />
        <Main path="/players/list/new" />
        <Status path="/sts/game/:num" />
      </Router>
    </div>
  );
}

export default App;