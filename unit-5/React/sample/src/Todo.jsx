import React, { useState } from "react";

export const Todo = (props) => {
    const [isStriked, setIsStriked] = useState(props.strikeOut);


    return(
        <div className="todo">
            <input type="checkbox"
            onClick={() => setIsStriked(!props.strikeOut)}
            value={isStriked}
            ></input>
            {isStriked ? 
                <p className="strike-out">{props.title}</p> : <p className="not-strike-out">{props.title}</p>
            }
        </div>
    );
}