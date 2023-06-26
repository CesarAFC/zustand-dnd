import { useTaskStore } from "../store/tasks";

const ListTask = () => {

    const {tasksStore} = useTaskStore();


    if(!tasksStore.length) return <h3>Add your task!</h3>

  return (
    <>
        {
            tasksStore.map( task => (
                <h1 key={task.id}>{task.name}</h1>
            ))
        }
    </>
  )
}

export default ListTask