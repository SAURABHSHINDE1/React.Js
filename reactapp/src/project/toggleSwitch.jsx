import { useState } from 'react'
import '../project/toggleSwitch.css'

export const ToggleSwitch = () =>{

     const [isOn,setIson] =useState(false)


    const HandleOnClick =()=>{
        setIson(!isOn)
    } 

 

    return <div className="toggle-switch" style={{backgroundColor:isOn ? "green" :""}} onClick={HandleOnClick} >
            <div className={`Switch ${isOn ? "on" :"off"}`}>
                <span>{isOn ? "on" :"off"}</span>
            </div>
    </div>
}