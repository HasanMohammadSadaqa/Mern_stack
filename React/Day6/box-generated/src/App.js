
import { useState } from 'react';
import './App.css';
import Form from './component/Form';
import Display from './component/Display'

function App() {
  const[colorVariable, setColorVariable]=useState([]);
  const displayColor = (x) => {
    // console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiii")
    setColorVariable([...colorVariable,x])
    // console.log("helloooooooooooooooooo")
  } 
  return (
    <div className="App">
      <Form whatTheColor = {displayColor}></Form>
      <Display inputColor ={colorVariable}></Display>
    </div>
  );
}

export default App;
