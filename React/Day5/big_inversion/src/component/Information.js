import React from 'react'

const Information = (props) => {
    return (
        <div>
            <h1> {props.fname}, {props.lname} </h1>
            <p> Age: {props.age} </p>
            {props.children}
        </div>
    )
}

export default Information