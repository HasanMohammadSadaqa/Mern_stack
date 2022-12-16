import React from 'react'

const NumberOrWordStyling = (props) => {
    return (
        <div>
            {isNaN(props.input)? (
                <p style={{ color: props.color, backgroundColor: props.bgcolor }}> The Word is : {props.input} </p>
            ): (
                <p style={{ color: props.color, backgroundColor: props.bgcolor }}>The Number is :{props.input} </p>
            )}
        </div>
    )
}

export default NumberOrWordStyling