import { useState, useEffect } from 'react';
import '../App.css';
import { MdCheck, MdDeleteForever } from 'react-icons/md';

export const TodoApp = () => {
  const [inputvalue, setInputvalue] = useState('');
  const [task, setTask] = useState(()=>{
    const todosdata = localStorage.getItem("ReactTodo");
    if(!todosdata) return [];
    return JSON.parse(todosdata);
  });
  const [DateTime, setDateTime] = useState('');
  
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleinput = (value) => {
    setInputvalue(value);
  };

  const handleformsubmit = (e) => {
    e.preventDefault();
    if (!inputvalue) return;

    if (task.includes(inputvalue)) {
      setInputvalue('');
      return;
    }

    setTask((prevTask) => [...prevTask, inputvalue]);
    setInputvalue('');
  };

  const handleToggleComplete = (taskName) => {
    setCompletedTasks((prev) => prev.includes(taskName) ? prev.filter((t) => t !== taskName) : [...prev, taskName]
    );
  };

  const Handledelet = (value) => {
    const updateddata = task.filter((curritem) => curritem !== value);
    setTask(updateddata);
    // setCompletedTasks((prev) => prev.filter((t) => t !== value)); // Also remove from completed
  };

  const Handleclearall = () => {
    setTask([]);
    setCompletedTasks([]);
  };


  // ⏰ Set time only once using useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  // add to local storage
  localStorage.setItem("ReactTodo",JSON.stringify(task))

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
      </header>

      <h2 className="date-time">{DateTime}</h2>

      <section className="form">
        <form onSubmit={handleformsubmit}>
          <div className="div">
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={inputvalue}
              onChange={(e) => handleinput(e.target.value)}
            />
            <button type="submit">Add Task</button>
          </div>
        </form>
      </section>

      <section className="MyunorderedList">
        <ul>
          {task.map((currelem, index) => (
            <li
              key={index}
              className={completedTasks.includes(currelem) ? 'completed' : ''}
            >
              <span>{currelem}</span>
              <button
                className="checkbtn"
                onClick={() => handleToggleComplete(currelem)}
              >
                <MdCheck />
              </button>
              <button
                className="deletbtn"
                onClick={() => Handledelet(currelem)}
              >
                <MdDeleteForever />
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="clear-all">
        <button className="clear-btn" onClick={Handleclearall}>
          Clear All
        </button>
      </section>
    </section>
  );
};
