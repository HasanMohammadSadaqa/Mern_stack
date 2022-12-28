import { Link } from '@reach/router'
import { navigate } from '@reach/router'
import React, { useState } from 'react'

const AutherForm = (props) => {
    const [name, setName]= useState(props.initName);

    const onSubmitHandler = e=>{
        e.preventDefault();

        props.onSubmitProp({name})
        setName("")
        navigate("/")
    }
    return (
        <div>
            <h1>Favorite authers</h1>
            <p><Link to={"/"}>Home</Link></p>
            <p>Add a new auther:</p>
            <form>
                {/* {props.errors.map((err, index) => {
                return <p key={index}>{err}</p>
            })} */}
                {/* <p style={{color:"red"}}> { props.errors }</p> */}
                <label>Name: </label>
                <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                {/* <input type="submit" value={props.value1} /> */}
                <button onClick={onSubmitHandler}>{props.value1}</button>
                {/* <button onClick={(e)=>navigate("/")}>{props.value2}</button> */}

            </form>
        </div>
    )
}

export default AutherForm