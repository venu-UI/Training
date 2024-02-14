import React from 'react';
import {useState} from 'react';
const mobile =[
    {
    id: 1,   
  name:"Apple",
  cost: "1000000"
},
{   id: 2, 
    name:"Blackberry",
    cost: "75000",
    completed: false
  },
  {
    id: 3, 
    name:"Vivo",
    cost: "25000",
    completed: false
  },

  {
    id: 4, 
    name:"Samsung",
    cost: "70000",
    completed: false
  },

  {
    id: 5, 
    name:"Nokia",
    cost: "10000",
    completed: false
  },

  {
    id: 6, 
    name:"Reliance",
    cost: "50000",
    completed: false
  }
]
function Mobile() {
    const [data, setData]=useState(mobile);
    const [filter, setFilter]=useState();
    const [enable, setEnable]=useState(true)
    // console.log("mobile",data);

    const filterdata=(event)=>{
      let value = event.target.value;
      let searchValue =  mobile.filter((fil)=> fil.name.toLowerCase().includes(value))
      setData(searchValue);
      setEnable(!enable);
    }

    function removeList(id){
      let removeData = data.filter((datas)=> datas.id !=id);
      setData(removeData);
    }

    const hidden ={
        visibility:"hidden"
    }
    const show ={
        visibility:"visible"
    }


  return (
    <div className='Wrapper'>
      <h1> MobileStore</h1>
      <div className='middle-layer'>
        <div className='searchbar'>
            <input type='text' className='search' value={filter} onChange={filterdata} placeholder='search...'></input>
        </div>
        <div className='datafield'>

        {
            data.map((item,index)=>{
                return(
                    <ul className='mobilelist'>
                        <li key={index}>{item.name} ___${item.cost} <button style={enable? hidden:show} onClick={()=>removeList(item.id)}>DEL</button></li>   
                    </ul>

                )
            })
        }

        </div>
      </div>
    </div>
    
  )
}

export default Mobile
