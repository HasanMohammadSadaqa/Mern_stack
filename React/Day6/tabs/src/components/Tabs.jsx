import React, { useState } from 'react'

const Tabs = (props) => {
    const[value, setValue] = useState(0)
    // const displayContent = (e, x) => {
    //     setValue(x);
    // }
    const signleTab = {
        padding: "1rem",
        borderRadius: "5px",
        shadowColor: "grey",
        shadowOpacity: 0.1,
        shadowOffset: { x: 2, y: 0 },
        shadowRadius: 2,
        backgroundColor: 'grey',
        width:"200px",
        margin:"20px"
    }
    const description = {
        border: "2px grey solid",
        padding: "1rem",
        textAlign: "center",
        minHeight: "10rem",
        borderRadius: "5px",
        fontSize: " 3rem",
    }
    return (
        <div>
            <p> {props.tabs.map( (item, index) => {
                return(<button key={index} style={signleTab} onClick = { (e) => setValue(index) } > {item.name} </button>)
            } )} </p>

            {/* <p> {props.tabs[value].content} </p> */}
            <p style={description}> {props.tabs[value].content} </p>
        </div>
    )
}

export default Tabs