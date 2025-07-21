import { useRef } from "react";



export const UseRefs =()=>{

  const username = useRef(null)
  const password = useRef(null)

  const HandleSubmitForm =(e)=>{
      e.preventDefault();
      console.log(username.current.value , password.current.value)
  }


  return <>

   <form onSubmit={HandleSubmitForm}>
      <input type="text" id="username" ref={username} />
      <input type="text" id="password" ref={password} />
      <button type="submit"> Submit </button>
   </form>
  
  </>
}