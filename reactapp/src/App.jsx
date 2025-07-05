// import styels from './App.module.css'
// import data from './data.json'


function App(props){

   const handleMouseOver = () => {
    alert("Mouse is over the div");
  };

  const handleChange = (e) => {
    console.log("Input value:", e.target.value);
  };

   const handleSubmit = (e) => {
    
    alert("Form submitted!");
  };

  const handleKeyDown = (e) => {
    console.log("Key pressed:", e.key);
  };

  return(<>
{/* <div onMouseOver={handleMouseOver}>Hover over me</div>
<input type="text" onChange={handleChange} />
 <form onSubmit={handleSubmit}>
      <input type="text" required />
      <button type="submit">Submit</button>
    </form> */}
    {/* <input
      onFocus={(e) => console.log(e)}

      onBlur={() => console.log("Blurred")}
    /> */}

     {/* <input type="text" onKeyUp={handleKeyDown} /> */}

     {/* <button onClick={(e)=>console.log(e)}> click mi

     </button> */}
 </> 
  )
}

export default App;

