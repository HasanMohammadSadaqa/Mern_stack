import logo from './logo.svg';
import './App.css';

import Information from './component/Information';

function App() {
  return (
    <div className="App">
      <Information fname={"Doe"} lname={"Jane"} age={45} hairColor={"Black"}>
      </Information>
      
      <Information fname={"Smith"} lname={"John"} age={88} hairColor={"Brown"}>
      </Information>

      <Information fname={"Fillmore"} lname={"Millard"} age={50} hairColor={"Brown"}>
      </Information>
      
      <Information fname={"Smith"} lname={"Maria"} age={62} hairColor={"Brown"}>
      </Information>
    </div>
  );
}

export default App;
