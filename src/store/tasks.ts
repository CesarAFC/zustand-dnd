import { create } from 'zustand';
import { Task } from '../types/taskTypes';
import { persist } from 'zustand/middleware';

type tasksTypes = {
    tasksStore: Array<Task>,
    newTask: (task: Task) => void
    deleteTask: (id: string) => void
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
          }),
          
          {name: 'tasks'}
    )
    );