import React, { useState } from "react";
function Input(props){

    const [input,setinput] = useState({
       title : '',
       content : '' 
    });

    const [power,setpower] = useState(0);

    function handlechange(event){
        const {name , value} = event.target

        setinput(prev =>{
            return{
                ...prev,
                [name] : value
            }
        })
    }

    function powerd(){
        setpower(true);
    }

    return(
        <form className="create-note">
            <input 
                style={power ? null : {display:"none"}}
                type="text" 
                placeholder="Title" 
                name="title" 
                onChange={handlechange} 
                value={input.title}
            >
            </input>
            <textarea 
                rows={power ? '3' : '1'} 
                placeholder="Take a note" 
                name="content" 
                onChange={handlechange} 
                value={input.content}
                onClick={powerd}
            >
            </textarea>

            <div in={power}>
                <button 
                    type="button" 
                    name="title" 
                    style={power ? null : {display:"none"}}
                    onClick={()=>{
                        props.add(input);
                        setinput({
                            title : '',
                            content : ''
                        });
                    }}     
                >
                    Add
                </button>
            </div>

        </form>
    )
}

export default Input; 