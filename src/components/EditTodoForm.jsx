import React, { useContext, useState } from 'react'
import { SideContext } from '../context/SideContext'

function EditTodoForm({tasks}) {
  const { editTask } = useContext(SideContext)

  const [newItem, setNewItem] = useState(tasks.title)

    const handleSubmit = (e) => {
        e.preventDefault()
        editTask(newItem, tasks.id)
    }

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type="text"
                className='todo-input'
                placeholder='Update Task'
                onChange={(e) => setNewItem(e.target.value)}
                value={newItem}
            />
            <button type='submit' className='todo-btn' >Update Task</button>
        </form>
    )

}

export default EditTodoForm