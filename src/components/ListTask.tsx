import { useTaskStore } from "../store/tasks";
import TaskSectionState from "./TaskSectionState";

const ListTask = () => {

    const {tasksStore} = useTaskStore();


    if(!tasksStore.length) return <h3>Add your task!</h3>


    const taskState = ["todo", "inProgress", "closed"]; 
    
    // enum TaskState {
    //   todo = "todo",
    //   inProgressDown = "inProgress",
    //   closed = "closed",
    // }

    // If the behavior and rendering are largely similar for each status, 
    // using an array to loop through and generate components dynamically is recommended. 
    // If you need more customization for each status, 
    // writing separate instances of the component might be a better fit.

  return (
    <div className="flex gap-16">

      {
        taskState.map( (status, index) => (
          <TaskSectionState key={index} status={status}/>
        ))
      }

    </div>
  )
}

export default ListTask