import { navigate } from '@reach/router'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AutherForm from '../components/AutherForm'

const Update = (props) => {
    const [autherToUpdate, setAutherToUpdate]= useState([])
    const [loaded, setLoaded]=useState(false)
     //useEffect to retrieve specific auther from dataBase
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/auther/${props.id}`)
        .then(res => setAutherToUpdate(res.data))
        .then(()=> setLoaded(true))
    })
    //method to update the auther
    const updateAuther=(updatedAuther)=>{
        axios.put(`http://localhost:8000/api/auther/${props.id}`,updatedAuther)
        .then(()=>{navigate("/"); setAutherToUpdate([...autherToUpdate,updatedAuther])})
    }
    return (
        <div>
            {loaded && <AutherForm onSubmitProp={ updateAuther} initName={autherToUpdate.name} value1="Update" value2={"Cancel"}></AutherForm>}
        </div>
    )
}

export default Update