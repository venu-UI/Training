import React from "react";
import Button from "./button";

function First(){

    const style ={
        main:{
            color:"blue",
            fontWeight:'bold'
        }
    }
    return (
    <div className="wrapper">
    <h1 style={style.main}>Identity</h1>
    <h2>Firstname</h2>
    <h3>LastName</h3>
    <h4>Designation</h4>
    <Button></Button>
    </div>
    )
}


export default First;