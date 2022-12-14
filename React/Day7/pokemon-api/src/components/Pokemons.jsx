import React, { useEffect, useState } from 'react'

const Pokemons = () => {
    const [allPokemons, setAllPokemons] = useState([])
    const [view, setView] = useState(false)


    useEffect ( ()=>{
        fetch('https://swapi.dev/api/people/')
            .then(response => response.json())
            .then(response => setAllPokemons(response.results), console.log(allPokemons))
            // .catch(errors => console.log(errors))
    },[])

    const isComeToShow =() => {
        setView(!view)
    }
    return (
        <div>
            {view ? <button onClick={isComeToShow}>Hide Pokemons</button> :<button onClick={isComeToShow}>Fetch Pokemons</button>}
            {view? allPokemons.map( (item,index) => {
                return(<ul key={index}>
                    <li >
                        {item.name}
                    </li>
                </ul>)
            } ) : ""}
        </div>
    )
}

export default Pokemons