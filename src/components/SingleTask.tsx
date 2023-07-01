import { toast } from "react-hot-toast";
import { useTaskStore } from "../store/tasks"
import { Task } from "../types/taskTypes"
import { useDrag } from 'react-dnd';

interface SingleTskProps {
  task: Task
}

const SingleTask = ({task}: SingleTskProps) => {
  const deleteTask = useTaskStore((state) => state.deleteTask);

  const handleDelete = () => {
    deleteTask(task.id)
    toast('Task deleted', {icon: '💀'})
  }

  const [{isDragging}, drag] = useDrag(() => ({
    type: 'task',
    item: {id: task.id},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }));

  isDragging && console.log('Task', isDragging, task)


  return (
    <div ref={drag} className={`relative p-4 mt-8 shadow-md rounded-md cursor-grab ${isDragging ? "opacity-25" : "opacity-100"}`}>
      <h1>{task.name}</h1>
      <button
        onClick={handleDelete}
        className="absolute bottom-1 right-1 text-slate-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </div>
  );
}

export default SingleTask