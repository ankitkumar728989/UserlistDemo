import { useState } from "react";
import "./userlist.css";
export function Userlist(){
    const [users,setUsers]=useState(JSON.parse(localStorage.getItem("users") || '[]'));
    return (
        <div className="main">
            <h3>userlist</h3>
            <table id="table">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>mobileNo</th>
                    <th>City</th>
                </tr>
                <tr>
                    {users.map((item,index)=>{
                        return(
                            <>
                       <td>{index}</td>
                       <td>{item.name}</td>
                       <td>{item.email}</td>
                       <td>{item.mobileNo}</td>
                       <td>{item.City}</td>
                       </>
                        )
                    })}
                    
                </tr>

            </table>
        </div>
    )
}

 export default Userlist;