import React, { useContext, useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
import { SideContext } from '../context/SideContext';

function TodoWrapper() {

const {tasks} = useContext(SideContext)

return (
    <div className="TodoWrapper">
    <TodoForm />
    {tasks.map((item, index )=> 
    item.isEditing ? (
      <EditTodoForm key={index} tasks={item}/>
    ): (
      <Todo key={index} tasks={item} />
    )
    )}
    </div>
  )
}

export default TodoWrapper