import React from 'react';
import {useState} from 'react';
import Second from './Second';
const mobile =[
    {
    id: 1,   
  name:"Apple",
  cost: "1000000"
},
{   id: 2, 
    name:"Blackberry",
    cost: "75000",
  
  },
  {
    id: 3, 
    name:"Vivo",
    cost: "25000",

  },

  {
    id: 4, 
    name:"Samsung",
    cost: "70000",

  },

  {
    id: 5, 
    name:"Nokia",
    cost: "10000",

  },

  {
    id: 6, 
    name:"Reliance",
    cost: "50000",

  }
]
function Mobile() {
    const [data, setData]=useState(mobile);
    const [filter, setFilter]=useState();
    const [enable, setEnable]=useState(true)
    const [post,setPost] = useState("")
    const [item,setItem]= useState([])
    const [update,setUpdate]=useState()
    const [name, setName]=useState("");
    console.log("post",post);

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

    //post data function

    const sendDatas=()=>{
      const id = data.length+1
      const name = post;
      const cost= "67000"
      const values ={id, name, cost}
      console.log(values);
      data.push(values);
      setPost("")
    }

    const childData=(res)=>{
      setItem(res)
      // console.log("items",item);
    }

    const editData=(id,name)=>{
     // console.log("values", id, name);
      const change ={id:id,name:name}
      setUpdate(change);
      setName(change.name);
     // console.log("values", update.id);
      setEnable(!enable);
    }

    const updateData=()=>{
      debugger;
      const values = name;
      const ids = update.id
      const index = data.filter((item)=>{
        if(item.id==ids){
          item.name = values
        }
      });
      setName("");
      console.log("dataaass",data)
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
                        <button onClick={()=>editData(item.id,item.name)}>edit</button>   
                    </ul>

                )
            })
        }


        {
          !enable?
        <div className='forms'>
          <input type='text' value={name}  onChange={(e)=>setName(e.target.value)}></input>
          <button onClick={updateData}>Update</button>
        </div>:""
        }
        </div>
        <div>
          <h1> childData</h1>
          {
           item && item.map((items)=>{
              return(
                <>
                <h3>{items.name}</h3>
                </>
              )
            })
          }
        </div>
      </div>
      <div>
        <input type = "text" value={post} onChange={(e)=>setPost(e.target.value)}></input>
        <button onClick={sendDatas}>sendData</button>
      </div>
      
      <div>
        <Second childData={childData}></Second>
      </div>
    </div>
    
  )
}

export default Mobile
