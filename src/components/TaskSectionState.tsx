import { useTaskStore } from "../store/tasks"
import SingleTask from "./SingleTask"

interface TaskSecionProps {
    status: string
}
interface TaskHeaderProps {
  header: string
  count: number
}
const TaskHeader = ({header, count}: TaskHeaderProps) => {

  // enum HeaderStyle {
  //   todo = 'bg-slate-500',
  //   inProgress = 'bg-purple-500',
  //   closed = 'bg-green-500',
  // }

  interface HeaderStyle {
    [key: string]: string;
  }
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
  
  const {tasksStore} = useTaskStore();
  
  console.log(tasksStore)
  const filterTodosByStatus = (status: string) => {
    return tasksStore.filter((todo) => todo.status === status);
  };


  return (
    <div className="w-64">
        <TaskHeader header={status} count={tasksStore.length} />
      {
        filterTodosByStatus(status).map( (task, index) => (
          <SingleTask key={index} task={task} />
        ))
      }
    </div>
  )
}

export default TaskSectionState