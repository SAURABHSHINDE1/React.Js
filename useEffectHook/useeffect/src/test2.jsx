import { useEffect, useRef, useState } from "react"

export const Data = ()=>{
const username = useRef(null)

const password = useRef(null)


    const Hnadlesubmit =(e)=>{
        e.preventDefault()

        console.log(username.current.value, password.current.value)
    }

return <>
    <form onSubmit={Hnadlesubmit} >
        <input type="text" name="username" ref={username} />
        <input type="text" name="password"  ref={password}/>
        <button type="submit"> Submit</button>
    </form>
</>
    
}