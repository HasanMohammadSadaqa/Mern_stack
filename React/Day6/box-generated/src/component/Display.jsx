import React from 'react'

const Display = (props) => {
    // const style1 ={
    //     backgroundColor : props.inputColor,
    // }
    return (
        <div>
            <p> {props.inputColor.map((item, index) =>
            <div style={{backgroundColor:item , width :"70px ", height:"120px"}} key={index}></div> )} </p>
        </div>
    )
}

export default Display