import React from 'react';
import {useState} from 'react';

const Child = (props) => {
  console.log("PROPS",props)
  return (
    <div className='child'>
      <h1>{props.childs.model}</h1>

      {
        props.story.map((data)=>{

            return(
                <h4>{data.author}</h4>
            )
        })
      }
    </div>
    
  )
}

export default Child
