import React, { useState } from 'react'

const Form = (props) => {
    const [color, setColor]= useState("")
    
    const addingColor= (event)=>{
        event.preventDefault();
        props.whatColor(color)
    }
    return (
        <div>
            <form onSubmit={addingColor}>
                <label>Color:</label>
                <input type="text" onChange = { (e)=> setColor(e.target.value) }  />
                <input type="submit" value="Add your color" />
            </form>
        </div>
    )
}

export default Form