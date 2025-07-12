import { useEffect, useState } from "react"

 export const Useeffect = ()=>{

    const [count , setCount] = useState(0)
    const [ name , setName] = useState("")

    useEffect(()=>{
        document.title =`count : ${count}`
        console.log("useEffect called for count")
    },[count])

    useEffect(()=>{
        console.log(`name: ${name}`)
    },[name])

    return(<>
    
    
    <h1>{count}</h1>
    <button onClick={()=>setCount(count +1)}>Incrememnt</button>

    <h2>{`name: ${name}`}</h2>
    <input type="text"  value={name} onChange={(e)=>setName(e.target.value)}/>

    </>)
}