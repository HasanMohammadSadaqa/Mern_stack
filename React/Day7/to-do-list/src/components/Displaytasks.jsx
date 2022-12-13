import React, {useState} from 'react'


const Displaytasks = ({theTask,updateTasks}) => {

    const handleDelete = ( (index)=> 
        updateTasks(theTask.filter( (task,id) => index !== id))
        );
    const handleCheck = (index)=> {
        const newArr = theTask.map ( (tas,i)=>{
                if(index === i){
                    tas.isCompleted = !tas.isCompleted;
                }
                return tas;
        }
        )
        updateTasks(newArr);
    }
    
    const checked = {
        textDecoration: "line-through"
    }
    return (
        <div>
            {theTask.map((item, index)=>{
                return(
                <div key={index} style={{display:"flex", justifyContent:"center",}}>
                    <p style={item.isCompleted ? checked : null}>{item.name}</p>
                    <input type="checkbox" checked={item.isCompleted} onChange={()=>handleCheck(index)}/>
                    <button onClick={()=>handleDelete(index)}>Delete</button>
                </div>)
            })}
        </div>
    )
}

export default Displaytasks