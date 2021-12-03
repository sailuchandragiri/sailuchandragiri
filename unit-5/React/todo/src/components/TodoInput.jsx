import React, { useState } from "react";

export const TodoInput=({onClick})=>{
    const [title, setTitle] = useState("");

    return(
        <div>
            <input placeholder="Enter todo" value={title} 
            onChange={(e) => setTitle(e.target.value)}></input>
            <button onClick={() => onClick(title)}>ADD</button>
        </div>
    );
}