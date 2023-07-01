import { create } from 'zustand';
import { Task } from '../types/taskTypes';
import { persist } from 'zustand/middleware';

// type status = 'todo' | 'inProgress' | 'closed'


type tasksTypes = {
    tasksStore: Array<Task>,
    newTask: (task: Task) => void
    deleteTask: (id: string) => void
    updateTaskState:  (id: string, status: string) => void
}

export const useTaskStore = create(
    persist<tasksTypes>(
        (set) => ({
            tasksStore: [],
            newTask: (task: Task) => {
              set( (state) => ({ 
                  tasksStore: [...state.tasksStore, task] 
              }) )
            },
            deleteTask: (id) => {
              set( (state) => ({ 
                  tasksStore: state.tasksStore.filter( taskId => taskId.id !== id) 
              }) )
            },
            updateTaskState: (taskId, newStatus) => {
              set( state => {
                console.log('id store', taskId)
                const updatedTasks = state.tasksStore.map(task =>
                  task.id === taskId ? { ...task, status: newStatus } : task
                );

                return {tasksStore: updatedTasks}
              }
                
                
              //   ({
              //   tasksStore: state.tasksStore.map( task => 
              //       task.id === id ? {...task, status: newStatus } : task
              //     )
              // }
              // )
              )
            }
          
          }),
          
          {name: 'tasks'}
    )
    );