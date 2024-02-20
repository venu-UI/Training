import React, { useEffect, useState } from 'react'
import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses';

function Second(props) {
    console.log("propsdata",props);
    const[data,setData]=useState()
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(response => setData(response));
    },[])

    props.childData(data);

    return (
    <div>
      <h1>second</h1>
    </div>
  )
}

export default Second
