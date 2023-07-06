import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { Task } from "../types/taskTypes";
import { useTaskStore } from "../store/tasks";
import toast from 'react-hot-toast';

// interface CreateTaskProps {
//     tasks: Array<Task>
//     setTasks: React.Dispatch<React.SetStateAction<Task[]>>
// }

const initialTask = 
    {
        id: "",
        name: "",
        status: "todo", // inProgess or Closed
    }

const CreateTask = () => {
    
    const [task, setTask] = useState<Task>(initialTask);
    const addTask = useTaskStore( state => state.newTask)

    const handleTask = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask({
            ...task,
            id: uuidv4(),
            name: e.target.value,
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(task.name.length < 3) return toast.error('Enter a valid task (More than 3 characters)')

        addTask(task)
        setTask(initialTask)
        toast.success('Task created!') 
    }

  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            className="border-2 border-slate-400 bg-slate-100 rounded-md mr-4 h-12 w-64 px-3 outline-none"
            value={task.name}
            onChange={handleTask}
            />
        <button className="bg-cyan-500 rounded-md px-4 h-12 text-white duration-500 hover:bg-cyan-700" type="submit">Create</button>
    </form>
  )
}

export default CreateTask