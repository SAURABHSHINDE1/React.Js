import { use } from "react"
import { Datacontext } from "./contextProvider"
import './App.css'

export const Home =()=>{

    const {dark , handelTheame} = use(Datacontext)

    

    return <>

       <div className={`conatiner ${!dark ? "dark" : ""}`}>

        <h1 id="main">Hello DreamsGuiders  {dark} </h1>
        <h1>You can Do EveryThing</h1>

        <button onClick={handelTheame}>{!dark ? "Switch to lightmode":"Switch to darkmode"}</button>


       </div>

    </>
}