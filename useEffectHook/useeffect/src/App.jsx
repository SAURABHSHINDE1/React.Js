import { useEffect, useState } from "react"

export const UseEffect =()=>{
  const [ count , setcount] = useState(0)
  const [ name , setname] = useState("")

  useEffect(()=>{
      document.title =`count : ${count}`
  },[count])

  useEffect(()=>{
      console.log("name :"+ name )
  },[name])

  return(<>
    <div className="container">
      <h1>UseEffect Hook</h1>
      <h2>count : {count}</h2>
      <button onClick={()=>setcount(count + 1)}>Increament</button>
      <h2>name : {name}</h2>
      <input type="text" placeholder="Enter Name" value={name} onChange={(e)=>setname(e.target.value)}/>
    </div>
  </>)
}