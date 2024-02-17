import React, { useContext, useState } from 'react'
import { SideContext } from '../context/SideContext'

function TodoForm() {

    // const [newItem, setNewItem] = useState("")
const { setNewItem, newItem, addTodos} = useContext(SideContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (newItem) {
            addTodos(newItem)
            setNewItem("")
        }

    }

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type="text"
                className='todo-input'
                placeholder='What is the task today?'
                onChange={(e) => setNewItem(e.target.value)}
                value={newItem}
            />
            <button type='submit' className='todo-btn' >Add Task</button>
        </form>
    )
}

export default TodoForm