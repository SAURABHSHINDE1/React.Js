import { useMemo, useState } from "react";
import Usememo from "./usememo";

const Counter = () => {
  const [count, setCount] = useState(0);

     const myBiodata = useMemo(() => {
    return {
      name: "saurabh",
      age: 20,
    };
  }, []);

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>

      <Usememo biodata={myBiodata} />
    </>
  );
};

export default Counter;
