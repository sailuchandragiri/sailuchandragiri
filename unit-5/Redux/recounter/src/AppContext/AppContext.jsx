import {createContext} from 'react';
import {store} from "../redux/store";
export const AppContext = createContext();

export const AppContextProvider = (children) =>{
    return <AppContext.Provider value={store}>{children}</AppContext.Provider>
}