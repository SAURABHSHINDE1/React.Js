import { useState } from "react"

export const Time = ()=>{
    
    
    const [time , setTime] = useState("")

    setInterval(()=>{
        
    const dateTime = new Date();

    const updateddate = dateTime.toLocaleDateString()
    const updatedTime = dateTime.toLocaleTimeString()

        setTime(`${updateddate} - ${updatedTime}`)
    },1000)

    return <>
        <h1>{time}</h1>
    </>
}