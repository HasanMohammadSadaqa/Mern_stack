import React, { useState } from 'react'

const Addtask = (props) => {
    const [task, setTask] = useState("")
    const addTask = (event)=> {
        event.preventDefault();
        props.whichTask (task)
        setTask("")
    }
    return (
        <div>
            <form onSubmit={addTask}>
                <label> Add new task: </label>
                <input type="text" onChange={(e)=> setTask(e.target.value)} value={task}/>
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default Addtask