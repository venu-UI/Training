import { useEffect, useState } from "react";



export default function useFetch(URL){
const [data,setData]=useState([])
useEffect(()=>{
fetch(URL).then(res=>res.json())
.then(response => {setData(response)})
},[])
 return data
}