import React from "react";

export const Square = (pros) =>{
    return(
        <button className="square" onClick={pros.onClick}>
            {pros.value}
        </button>
    );
}