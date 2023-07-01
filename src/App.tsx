// import { useState } from 'react';
import './App.css'
import CreateTask from './components/CreateTask';
import ListTask from './components/ListTask';
// import { Task } from './types/taskTypes';
import { useTaskStore } from './store/tasks';
import { Toaster } from 'react-hot-toast';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {

  // const [tasks, setTasks] = useState<Task[]>([]);
  const {tasksStore} = useTaskStore();
  console.log('Task from app', tasksStore)
  
  return (
    <DndProvider backend={HTML5Backend}>
      <div className='bg-slate-100 w-screen h-screen flex flex-col items-center p-3 pt-32 gap-16'>
        <CreateTask />
        <ListTask />
      </div>
      <Toaster/>
    </DndProvider>
  );
}

export default App
