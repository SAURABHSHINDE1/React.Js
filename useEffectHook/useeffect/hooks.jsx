import { useEffect, useState } from "react"


export const Hook =()=>{

    const [data , setData ]= useState(0)

    const fetchdata = async ()=>{
       const res =await fetch(`https://api.weatherapi.com/v1/current.json?key=acf73cfc14d64ab4a6b61212250307&q=pune`)

       const data =res.json()

       console.log(data)
        
    }

    useEffect(()=>{

        fetchdata()
    },[])




    return<>
    
    
    
    </>
}