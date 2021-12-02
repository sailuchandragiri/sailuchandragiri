import { createContext } from "react";

const AppContext = createContext();

export const AppContextProvider = ({children}) => {
    return <AppContextProvider value="Text">{children}</AppContextProvider>
}