import React, { useState } from "react";

export const Todo=({data})=>{
    const [isStriked, setIsStriked] = useState(false);

    const onSave =()=>{
        fetch(`http://localhost:3001/todos/${data.id}`, {
            method:"Patch",
            "headers":{
                "content-type":"application/json",
            },
            body:JSON.stringify({
                ...data,
                isStriked,
            })
        })
    }

    return(
        <div className="todo">
            <input type="checkbox" 
            onClick={() => setIsStriked(!isStriked)}
            value={isStriked}
            ></input>
            {isStriked ? <p className="striked-out">{data.value}</p> : <p>{data.value}</p>}
            <button onClick={onSave }>Save</button>
        </div>
    );
}