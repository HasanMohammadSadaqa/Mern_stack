import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[txt, setTxt] =useState("")
  return (
    <div className="App">
      <Form1 myFun = {setTxt}></Form1>
      <display data={txt}></display>
      
    </div>
  );
}

export default App;
