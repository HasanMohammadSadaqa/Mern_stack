import './App.css';

import Information from './component/Information';
function App() {
  return (
    <div className="App">
      <Information fname={"Doe"} lname={"Jane"} age={45}>
        <p>Hair Color: Black</p>
      </Information>
      
      <Information fname={"Smith"} lname={"John"} age={88}>
        <p>Hair Color: Brown</p>
      </Information>
    </div>
  );
}

export default App;
