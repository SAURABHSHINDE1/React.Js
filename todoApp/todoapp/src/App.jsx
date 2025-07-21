import { useState } from 'react'
import '../src/App.css'
import { MdCheck, MdDeleteForever } from "react-icons/md";



export const TodoApp = () =>{

    const [inputvalue, setInputvalue] = useState("")
    const [task, setTask]=useState([])
    const [DateTime,setDateTime] =useState("")
    const [completedTasks, setCompletedTasks] = useState([])

    const handleinput =(value)=>{
        setInputvalue(value)
    }

    const handleformsubmit = (e)=>{
        e.preventDefault();

        if(!inputvalue) return;

        if(task.includes(inputvalue)){
            setInputvalue("");
            return;
        }

        setTask((prevTask)=> [...prevTask,inputvalue]);

        setInputvalue("")
    }

    const Handledelet = (value)=>{
        var updateddata = task.filter((curritem)=> curritem !=value )
        setTask(updateddata)
    }

   

    setInterval(()=>{
        const now = new Date();
        const formattedDate = now.toLocaleDateString();
        const formattedTime = now.toLocaleTimeString()
        setDateTime(`${formattedDate} - ${formattedTime}`)
    },1000) 

  

    const Handleclearall =()=>{
        setTask([])
    }

    const Handlecompletetask = (value)=>{
        setCompletedTasks((prev)=> prev.includes(value) ? prev.filter((t)=> t !== value) : [...prev, value] )
    }

    return <section className="todo-container">
 
    <header>
        <h1>Todo List</h1>
    </header> 

    <h2 className='date-time'>{DateTime}</h2>

    <section className="form">
        <form onSubmit={handleformsubmit} >
            <div className="div">
                <input type="text" className='todo-input' autoComplete='off' value={inputvalue}  onChange={(event)=> handleinput(event.target.value)} />
                 <button type='submit'>Add Task</button>
            </div>
        </form>
    </section>

    <section className='MyunorderedList'>
        <ul>
            {
                task.map((currelem,index)=>{
                    return <li key={index} className={completedTasks.includes(currelem) ? 'completed':''}>
                        <span>{currelem}</span>
                        <button className='checkbtn' id='mdcheck'  onClick={()=> Handlecompletetask(currelem)}><MdCheck /></button>
                        <button className='deletbtn' id='mddel'onClick={()=>Handledelet(currelem)}><MdDeleteForever /></button>
                    </li>
                })
            }
        </ul>
    </section>

    <section className='clear-all'>
            <button className='clear-btn' onClick={Handleclearall}>Clear All</button>
    </section>

    </section>
}


