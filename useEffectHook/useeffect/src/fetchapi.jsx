import { useEffect, useState } from "react"


export const Fetchdata =()=>{

    const [apiData ,setApiData] = useState(null)
    const [loading , setLoading] = useState(true)
    const [error , setError] =useState("")

    const fetchapi = async()=>{
    
        try {
             const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
             const data = await res.json()
             setApiData(data)
             setLoading(false)

        } catch (err) {
            console.log(err)
            setError(err)
            setLoading(false)
        }   
    
    }

    useEffect(()=>{fetchapi()},[])

    if(loading){
        return(<>
        <h1>Loading Data........</h1>
        </>)
    }

        if(error){
        return(<>
        <h1>Error:{error.message}</h1>
        </>)
    }




    return (<>
    
    <span>{
        <ul>
            {
                 apiData.map((item) => (
                    <li key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.body}</p>
                    </li>
                ))
            }
        </ul>
        
        }</span>
    
    </>)
}