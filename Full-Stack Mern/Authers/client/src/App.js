import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'
import { Router } from '@reach/router';
import AutherForm from './components/AutherForm';
import AllAuther from './components/AllAuther';
import axios from 'axios';
import Update from './views/Update';

function App() {
  const [authers, setAuthers]=useState([]);
  const [loaded, setLoaded]=useState(false);

  //method to add a new auther
  const createNewAuther=(newAuther)=>{
    axios.post("http://localhost:8000/api/Auther/new", newAuther)
    .then((res)=> setAuthers([...authers,res.data]))
  }

  //method to get all authers from database and save it in state variable (authers) to pass this variable to component i want to list them so this is a promise and it need a useEffect 
  useEffect( () =>{
    axios.get("http://localhost:8000/api/Authers")
        .then(response => {
            setAuthers(response.data);
            setLoaded(true);
        })
},[authers]);

    //method to delete specific Auther
    const deleteAuther = (deleteID)=>{
      axios.delete(`http://localhost:8000/api/Auther/${deleteID}`)
      .then(()=>setAuthers(authers.filter((auther)=>deleteID !== auther._id)))
  }
  return (
    <div className="App">
      <Router>
        <AutherForm path="/new" onSubmitProp = {createNewAuther} initName="" value1="Submit" value2={"Cancel"}></AutherForm>
        {loaded && <AllAuther path="/" authers={authers} onDeleteProp={deleteAuther}></AllAuther>}
        <Update path="/edit/:id"></Update>
      </Router>
    </div>
  );
}

export default App;
