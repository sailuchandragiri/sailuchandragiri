import { Third } from "./third";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export const Second =({age})=>{
    const storedValue = useContext(AppContext);
    console.log(storedValue);
    return (
        <div>
            <Third age={age} />
        </div>
    );
};