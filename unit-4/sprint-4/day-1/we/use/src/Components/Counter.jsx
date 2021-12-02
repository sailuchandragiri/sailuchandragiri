import { useEffect, useState } from "react";


export function Counter() {

    const [count, setCount] = useState(10);

    useEffect(() =>{
        const id = setInterval(() => {
            console.log("set");
            setCount((prev) => {
                if(prev===1){
                    clearInterval(id);
                    return 0;
                }
                return prev-1;
            });
        }, 1000);
        return () => {
            console.log("unmounting");
            clearInterval(id);
        };
    }, []);

    return <h1>Count: {count}</h1>;
}