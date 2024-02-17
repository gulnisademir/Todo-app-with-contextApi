import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { SideContext } from '../context/SideContext'

function Todo({tasks}) {

    const { toggleComplete, deleteTodo, editTodo } = useContext(SideContext)
   
    return (
        <div className='Todo'>
            <p onClick={() => toggleComplete(tasks.id)} className={`${tasks.completed ? "completed" :""}`}>{tasks.title}</p>
            <div>
                <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodo(tasks.id)}/>
                <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(tasks.id)}/>
            </div>
        </div>
    )
}

export default Todo