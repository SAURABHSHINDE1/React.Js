
import './propagation.css'

const Events = () =>{

    const handleGretting = (user) =>{
        alert(`hellooo ${user}`)
    }

    return(
        <Data
        
        onclick ={()=>{handleGretting("saurabh")}}

        />
    )
}


const Data = (props) =>{
    return(
        <button onClick={props.onclick} >click me </button>
    )
}

export default Events