import { useContext } from "react"
import { Datacontext, DataProvider } from "./index.jsx"

export const Home =()=>{

    const   { myName ,Age }  = useContext(Datacontext)
    return<>

        <h1>hello from context {myName} and my age {Age}</h1>

    </>
}