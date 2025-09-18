import { createStore } from "redux";

const Add_Task = "add/task";
const Delete_Task = "delete/task";

const initialState = {
  task: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Add_Task:
      return {
        ...state,
        task: [...state.task, action.payload],
      };

    case Delete_Task:
      const newTask = state.task.filter((ele, ind) => ind !== action.payload);
      return {
        ...state,
        task: newTask,
      };

    default:
      return state;
  }
};


const store = createStore(reducer)

store.dispatch({type: Add_Task, payload: "task one"})
console.log(store.getState());
store.dispatch({type: Add_Task, payload: "task two"})
console.log(store.getState());
store.dispatch({type: Add_Task, payload: "task three"})
console.log(store.getState());
store.dispatch({type: Delete_Task, payload: 1})
console.log(store.getState());

