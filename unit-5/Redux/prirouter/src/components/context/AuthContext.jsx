import {createContext} from "react"
import {useState} from "react";
export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [token,setToken] = useState("");
    const handleToken = (newToken) => {
        setToken(newToken);
    }
    return <AuthContext.Provider value = {{token,handleToken}}>;{children}</AuthContext.Provider>
}