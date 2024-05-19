import React, { useState } from "react";
import "./UserDetail.css";
import { useParams } from 'react-router-dom'; 
const UserDetail =()=>{
    const { id } = useParams();
const [data,setData]=useState({})
const url =`https://dummyjson.com/users/${id}`;
fetch(url).then((res)=>res.json()).then((data)=>setData(data))
    return (
      
        <div className="maindetail">
            <table id="userdetail">
                <tr>
                    <th>ID</th>
                    <th>UserName</th>
                    <th>Age</th>
                </tr>
                <tr>
                    <td>{data.id}</td>
                    <td>{data.username}</td>
                    <td>{data.age}</td>
                </tr>
            </table>
        </div>
    )
}

export default UserDetail;