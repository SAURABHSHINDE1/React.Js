import axios from "axios";
import { useEffect, useState } from "react";

const Axios = () => {

    const [data , setData] = useState([]) 

    const fetchapi =()=>{
       useEffect(()=>{
         axios.get('https://jsonplaceholder.typicode.com/posts')

        .then((response)=>setData(response))

        .catch((err)=>console.log(err))

       },[])
    
    }

    fetchapi()

    return ( <>

<ul>{

    data.map((currelm)=>{

        return <li>
            <h1>{data.data.title}</h1>
        </li>

    })
    
    }
</ul>
    
    </> );
}
 
export default Axios;