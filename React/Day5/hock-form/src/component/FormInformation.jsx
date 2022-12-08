import React, {useState} from 'react'

const FormInformation = (props) => {
    const [fname, setFirstName] = useState("")
    const [lname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirm] = useState("")

    const fillingForm = (e)=>{
        setFirstName(e.target.value)
    }
    return (
        <div>
            <form>
            <label>First Name: </label>
            <input type="text" onChange={fillingForm}/>
            <label>last Name: </label>
            <input type="text" onChange={(e)=> setLastName(e.target.value)}/>
            <label>Email: </label>
            <input type="text" onChange={(e)=> setEmail(e.target.value)}/>
            <label>Password: </label>
            <input type="password" onChange={(e)=>setPassword(e.target.value)}/>
            <label>Confirm password: </label>
            <input type="password" onChange={(e)=> setConfirm(e.target.value)}/>
            </form>

            <p>First Name: {fname}</p>
            <p>last Name: {lname}</p>
            <p>Emai: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
    )
}

export default FormInformation