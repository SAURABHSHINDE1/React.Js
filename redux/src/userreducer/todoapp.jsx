import { useReducer, useState } from "react";
const TodoappReducer = () => {
  const initialState = {
    task: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "Add_Task":
        if (action.payload !== "") {
          return {
            ...state,
            task: [...state.task, action.payload],
          };
        }
        return state;

      case "Delete_Task":
        const newTask = state.task.filter((ele, ind) => ind !== action.payload);
        return {
          ...state,
          task: newTask,
        };

      default:
        return state;
    }
  };

  const [task, dispatch] = useReducer(reducer, initialState);
  const [inputval, setInputval] = useState("");
  console.log(task);

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Enter your task"
          value={inputval}
          onChange={(e) => setInputval(e.target.value)}
        />
        <button
          type="submit"
          onClick={() => dispatch({ type: "Add_Task", payload: inputval })}
        >
          Add Task
        </button>

        <ul>
          {task.task.map((ele, ind) => (
            <li key={ind}>
              {ele}{" "}
              <button onClick={()=>dispatch({ type: "Delete_Task", payload: ind })}>
                delete
              </button>
            </li>
          ))}
        </ul>
      </form>
    </>
  );
};

export default TodoappReducer;
