import React, { useState } from 'react'

import './App.css';
import Form from './component/Form';
import Display from './component/Display';


function App() {
  const [colorVariable, setColorVariable] = useState([])
  const displayColor = (x)=> {
    setColorVariable([...colorVariable, x]);
  }
  return (
    <div className="App">
      <Form whatColor={ displayColor }></Form>
      <Display inputColor = {colorVariable}></Display>
    </div>
  );
}

export default App;
