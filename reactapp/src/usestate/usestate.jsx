import { useState } from 'react'
import './usestate.css'

const UsateState = ()=>{

    const [count , setCount] = useState(0)
    const [invalue , setValue] = useState(1)

    const HandleCount = ()=>{
        setCount(count + invalue)
    }

   const HandelsubCount = ()=>{
    setCount(count - invalue)
   }

   const Hnadlereset =()=>{
    setCount(0)
    setValue(1)
   }

   const Handleinput =(e) =>{
    const val = Number(e.target.value);
    setValue(isNaN(val) ? 0 : val); 
   }



    return <>
    <div className="container">
        <h1>UseState Handaling</h1>
        <div className="count-div">
            <h1>{count}</h1>
        </div>
        <input type="text"  id="input" value={invalue} onChange={Handleinput }/>
        <div className="dtns">
            <button onClick={HandleCount} disabled={count >= 100}>Increament</button>
            <button onClick={HandelsubCount} disabled={count <= 0}>Decrement</button>
            <button onClick={Hnadlereset}>Reset</button>
        </div>
    </div>
    
    </>
}

export default UsateState