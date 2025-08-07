import { createContext } from "react"


 export const Datacontext = createContext()


 export const DataProvider =({children})=>{
    const myName = "saurabh"
    const Age =20
    return <Datacontext.Provider value={{myName,Age}}>{children}</Datacontext.Provider>
}