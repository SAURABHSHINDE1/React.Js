import { useState } from "react"

// const Style={
//     padding:"15px 40px",
//     backgroundColor:"orange",
//     margin:"10px"
// }

// const heading ={
//     marginLeft:"65px",
//     fontSize:"45px"
// }

// const State =()=>{


//   const [count,setCount] = useState(1 );

//   const HandaleCount = () =>{
//     setCount(()=>count + 2)
//   } 

//     return(
//         <>
//         <h1 style={heading}>{count}</h1>
//         <button style={Style} onClick={HandaleCount}>Increment</button>
//         </>
//     )
// }

// export default State

const arr =[
  {
    name:"saurabh",
    age:22
  },

   {
    name:"Rohit",
    age:20
  },

   {
    name:"Abishek",
    age:23
  },

   {
    name:"Tanmay",
    age:24
  },

   {
    name:"Aditya",
    age:21
  },
]

const Data = () =>{
  const [users,setUser] =useState(arr)

  const addUser = () => {
  setUser([...users, { name: "New User", age: 19 }]);
};

  return(<>
    <ul>
      {
          users.map((currElem,index)=>{
            return<li>
              
                {currElem.name} - {currElem.age} year old
                
            </li>
        
            
          })
      }
    </ul>
    <button onClick={addUser}>adduser</button>
   </>
  )
}

export default Data


