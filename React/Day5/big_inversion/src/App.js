import logo from './logo.svg';
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

      <Information fname={"Fillmore"} lname={"Millard"} age={50}>
        <p>Hair Color: Brown</p>
      </Information>

      <Information fname={"Smith"} lname={"Maria"} age={62}>
        <p>Hair Color: Brown</p>
      </Information>
    </div>
  );
}

export default App;
