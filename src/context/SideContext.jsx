import { createContext, useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export const SideContext = createContext()

export function SideContextProvider({children}) {

    const [newItem, setNewItem] = useState("")
    const [tasks, setTasks] = useState([])
    
    const addTodos = (todo) => {
        setTasks(prev => [...prev, {id:uuidv4(),title: todo,
        completed: false, isEditing: false }])
    }


    const toggleComplete = id => {
      setTasks(tasks.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo ))
    }

    const deleteTodo = id => {
      setTasks(tasks.filter(todo => todo.id !== id ))
    }

    const editTodo = (id) => {
      setTasks(tasks.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo ))
    }

    const editTask = (title,id) => {
      setTasks(tasks.map(todo => todo.id === id ? {...todo, title, isEditing: !todo.isEditing} : todo ))
    }

    
    return <SideContext.Provider value={{tasks, newItem, setNewItem, addTodos, addTodos,
    toggleComplete,
    deleteTodo,
    editTodo,
    editTask}}>
        {children}
    </SideContext.Provider>
}