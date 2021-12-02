import { useEffect, useState } from "react";

export function Counter(){
    const [count, setCount] = useState(0);

    useEffect(() => {
       const id = setInterval(() => {
            //console.log("Running interval", count);
            setCount((prev) => {
                if(prev === 10){
                    clearInterval(id);
                    return 10;
                }
                return prev+1;
            })
        },1000);

    },[])

    return <><h1>Start Time: {count} Sec</h1>
    <h1>End Time : 10 Sec</h1></>
}