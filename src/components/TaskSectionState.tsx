import { useTaskStore } from "../store/tasks";
import SingleTask from "./SingleTask";
import { useDrop } from 'react-dnd';


interface TaskSecionProps {
    status: string
}
interface TaskHeaderProps {
  header: string
  count: number
}
interface HeaderStyle {
  [key: string]: string;
}

const TaskHeader = ({header, count}: TaskHeaderProps) => {

  // enum HeaderStyle {
  //   todo = 'bg-slate-500',
  //   inProgress = 'bg-purple-500',
  //   closed = 'bg-green-500',
  // }

  const headerStyle: HeaderStyle = {
    todo: 'bg-slate-500',
    inProgress: 'bg-purple-500',
    closed: 'bg-green-500',
  }

  return (
    <div className={`${headerStyle[header]} flex items-center h-12 pl-4 rounded-md uppercase text-sm text-white`}>
        {header}<div className="ml-2 bg-white w-5 h-5 text-black rounded-full text-center">{count}</div>
    </div>
  )
}


const TaskSectionState = ({status}: TaskSecionProps) => {
  
  const {tasksStore, updateTaskState} = useTaskStore();

  
  const filterTodosByStatus = (status: string) => {
    return tasksStore.filter((todo) => todo.status === status);
  };
  
  const addItemToSection = (id: string) => {
    console.log('Envio a la store',  id, status)
    updateTaskState(id, status)
    console.log("Store luego de update", tasksStore)
  }

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item: {id: string}) => addItemToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div ref={drop} className={`w-64 rounded-md p-2 ${isOver ? "bg-slate-200" : "" }`}>
        <TaskHeader header={status} count={tasksStore.length} />
      {
        filterTodosByStatus(status).map( (task) => (
          <SingleTask key={task.id} task={task} />
        ))
      }
    </div>
  )
}

export default TaskSectionState