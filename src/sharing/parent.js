import React from 'react';
import Child from './child';
import { useState } from 'react';

const Parent = () => {
    const data={
        name:"Dell",
        model:"2014"
    }

    const books =[{
            id: 1,
            name: "horror",
            author:"venugopal"
        },
        {
        id: 2,
        name: "comedy",
        author:"raghu"
        },
        {
            id: 3,
            name: "drama",
            author:"chary"
            }
    
]

    const hero="welcome hero"
    const[story, setStory] =useState(books);
    console.log("StoryData", story);

   
   
    return (
    <div className='parent'>
      <h1>parentsData</h1>

      {/* <h2>{data.name}</h2> */}

      <div>
      
        {
            story.map((data,index)=> {
                debugger;
              return(
                <>
                    <ul>
                    <li key ={index}>{data.name}</li>
                    </ul>
                 
                    </>


              )
            
            
            })
        }

      </div>
      <Child childs={data} heros={hero} story={story}>
        
      </Child>
    </div>
  )
}

export default Parent
