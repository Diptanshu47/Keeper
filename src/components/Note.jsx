import React, { useState } from "react";

import Input from "./Input";
import notes from "../data/notes";

function Note(){

    const [arr,setarr] = useState(notes)

    function Add(input){
        setarr(prev =>{
            return[...prev,input]
        })
    }

    function del(id){
        setarr((prev =>{
            return prev.filter((ans,index) =>{
                return id !== index 
            });
        }))
    }

    return(
        <div>
            <Input add={Add}/>
            {arr.map((val,index) =>{
                return(
                    <div className="note" key={index}>
                        <h1>{val.title}</h1>
                        <p>{val.content}</p>
                        <button onClick={()=>{del(index)}} type="button">Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Note; 