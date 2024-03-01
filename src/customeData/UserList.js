import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './custome';

function UserList() {
    const {userId} = useParams();
    const dynamic = useFetch("https://jsonplaceholder.typicode.com/users");
    const filterData = dynamic.filter((data)=>data.id == userId);
  return (
    <div className='user'>
      {
        filterData.map((item,i)=>{
            return(
                <div className='cards'>
                    <h3>{item.email}</h3>
                    <h1>{item.phone}</h1>
                </div>
            )
        })
      }
    </div>
  )
}

export default UserList
