import React from "react";

export const TodoList = ({title, id, status, handleToggle}) => {
    return(
        <div>
            <p>{title}</p>
            <button onClick={()=> handleToggle(id)}>{status ? "TRUE" : "FALSE"}</button>
        </div>
    );
}