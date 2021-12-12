import React, { useRef, useState } from "react";

export const Watch=()=>{
    const [count, setCount] = useState(0);
    const ref = useRef();

    const onStart = () => {
        ref.current = setInterval(function(){
            setCount(count => count+1)
        },1000)
    }

    const onStop = () => {
        clearInterval(ref.current)
    }

    return(
        <div className="lay">
            Seconds:{count}
            <div>
            <button onClick={onStart}>Start</button>
            <button onClick={onStop}>Stop</button>
            </div>
        </div>
    );
}