import React, { useEffect, useState } from 'react'
import axios from 'axios';


const Pokemons = () => {

    const [allPokemons, setAllPokemons] = useState(null)
    const [show, setShow] = useState(false)
    // const [loaded, setLoaded]= useState(false)


    useEffect( ()=>{
        axios.get( 'https://pokeapi.co/api/v2/pokemon?limit=807&offset=0' )
            .then (response =>{setAllPokemons(response.data.results)})
            // , setLoaded (true)
            .catch (errors => console.log(errors))
    },[] )

    const clicker = (e)=>{
        e.preventDefault();
        setShow(!show);
    }
    return (
        <div>
            {/* { JSON.stringify( allPokemons)} */}
            {show?   <button onClick={clicker}>Hide Pokemons</button> :   <button onClick={clicker}>Fetch Pokemons</button> }
            {show? allPokemons.map( (item,index) =>{
                return( <ul key ={index}>
                    <li> {item.name} </li>
                </ul> )
            } ): ""}
        </div>
    )
}

export default Pokemons


