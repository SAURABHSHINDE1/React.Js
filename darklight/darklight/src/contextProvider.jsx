import { createContext, useState } from "react";

export const Datacontext = createContext()

export const DataProvider =({children})=>{

        const [dark , setDark ] = useState(true)
        const handelTheame =()=>{
             setDark(!dark)
        }

    return <Datacontext.Provider value={{dark ,handelTheame}}>
        {children}
    </Datacontext.Provider>
}