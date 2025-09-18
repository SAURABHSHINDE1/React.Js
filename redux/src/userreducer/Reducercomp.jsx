import { useReducer } from "react";

const Reducercomp = () => {
  const reducer = (state, action) => {
        switch(action.type){
            case "INC": return state + 1;

            case "DEC": return state - 1;

            default: return state;
        }
  };

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <> 
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "INC" })}>Increament</button>
      <button onClick={() => dispatch({ type: "DEC" })}>Decreament</button>
    </>
  );
};

export default Reducercomp;
