import { useEffect } from "react"

export const Data = ()=>{

     const apidata= async()=>{

        try{

             const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)

        const data = await response.json()

        console.log(data)

        }   

        catch(err){
            console.log(err)
        }

    }

    useEffect(()=>{
         apidata()
    }, [])

    return <>

        <h1>Hello from apidata</h1>
    </>
}