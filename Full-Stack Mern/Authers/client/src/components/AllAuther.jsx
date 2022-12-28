import { Link } from '@reach/router'
import React from 'react'

const AllAuther = (props) => {
    return (
        <div>
            <h1>Favorite authers</h1>
            <p><Link to={"/new"}>Add a new auther</Link></p>
            <p>We have qoutes by:</p>
            {props.authers.map((auther, index)=>{
                return <table key={index}>
                    <thead>
                        <th>Authers</th>
                        <th>Actions Available</th>
                    </thead>
                    <tbody>
                        <td> {auther.name} </td>
                        <td>
                            <button>
                                <Link to={"/edit/"+auther._id}>Edit</Link>
                            </button>
                            <button onClick={()=>props.onDeleteProp(auther._id)}>
                                Delete
                            </button>
                        </td>
                    </tbody>
                </table>
            })}
            
        </div>
    )
}

export default AllAuther