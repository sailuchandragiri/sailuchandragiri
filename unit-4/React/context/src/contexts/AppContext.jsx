import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {
    const [state, setState] = useState("dummy");
    const handleChange = (change) => {
        setState(change);
    };  

    return <AppContext.Provider value={{state, handleChange}}>
        {children}
    </AppContext.Provider>;
}