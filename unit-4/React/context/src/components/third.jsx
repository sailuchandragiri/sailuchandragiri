import { AppContext } from "../contexts/AppContext";
import { useContext } from "react";


export const Third = ({age})=>{
    const {state, handleChange} = useContext(AppContext);
    return (
        <div>
            State is:{state}
            <button
                onClick={() => {
                    handleChange("Hello");
                }}
            >Change context</button>
        </div>
    );
};