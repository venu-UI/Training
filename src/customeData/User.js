import React, { useState } from 'react'
import { data } from './Userdata'
import { Link } from 'react-router-dom';
function User() {
    const userdata = data;
    console.log("dataaas",userdata);
    const [users,setUsers]=useState(userdata);
  return (
    <div className='user'>
      {
        users.map((item,i)=>{
            return(
                <Link to ={`/User/${item.id}`}>
                <div className='cards'>
                    <h2>{item.id}</h2>
                    <h3>{item.name}</h3>
                </div>
                </Link>
            )
        })
      }
    </div>
  )
}

export default User
