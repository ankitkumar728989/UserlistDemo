import { useEffect, useState } from "react";
import "./userlist.css";
import { Link } from "react-router-dom";
export function Userlist(){
     const [users,setUsers]=useState(JSON.parse(localStorage.getItem("users") || '[]'));
    useEffect(()=>{
       fetch('https://dummyjson.com/users').then(res => res.json())
       .then(json => setUsers(json.users));
    });
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
                    {users && users.map((item,index)=>{
                        return(
                            <tr>
                       <Link to={`UserDetail/${item.id}`}>{item.id || index}</Link>
                       <td>{item.name || `${item.firstName}  ${item.lastName}`}</td>
                       <td>{item.email}</td>
                       <td>{item.mobileNo || item.phone}</td>
                       <td>{item.City || item.address.city}</td>
                       </tr>
                        )
                    })}                                
            </table>
        </div>
    )
}

 export default Userlist;