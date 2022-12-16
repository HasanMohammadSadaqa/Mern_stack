import React from 'react'

const NumberOrWord = (props) => {
    return (
        <div>
            { isNaN(props.input) ? (
                <p>The Word is {props.input}</p>
            ) : (
            <p>The Number is : {props.input} </p>
            )
            }
        </div>
    )
}

export default NumberOrWord