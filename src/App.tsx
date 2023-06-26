// import { useState } from 'react';
import './App.css'
import CreateTask from './components/CreateTask';
import ListTask from './components/ListTask';
// import { Task } from './types/taskTypes';
import { useTaskStore } from './store/tasks';
import { Toaster } from 'react-hot-toast';

function App() {

  // const [tasks, setTasks] = useState<Task[]>([]);
  const {tasksStore} = useTaskStore();
  
  return (
    <>
      <div className='bg-slate-100 w-screen h-screen flex flex-col items-center justify-center pt-3 gap-16'>
        <CreateTask />
        <ListTask />
      </div>
      <Toaster/>
    </>
  );
}

export default App
