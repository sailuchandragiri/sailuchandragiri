import {useState,useEffect} from "react";
export function Counter(){
    const [counter,setCounter] = useState(10);
    useEffect(()=>{
        const id = setInterval(()=>{
            setCounter((prev)=>{
                console.log("setInterveal")
                if(prev === 1)
                {
                    clearInterval(id);
                    return 0;
                }
                return prev-1;
            })
        },1000);

        return ()=>{
            clearInterval(id);
        }
    }, []);

    return <h1>Counter:{counter}</h1>
}