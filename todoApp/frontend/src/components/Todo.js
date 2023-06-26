import React from 'react'
import { BiEdit } from 'react-icons/bi'
import { AiFillDelete }  from 'react-icons/ai'

const Todo = ({text, updateModeTodo, deleteTodo}) => {
  return (
    <div className='todo'>
       <div className='text'>{text}</div>
       <div className='icons'>
           <BiEdit className='icon' onClick={updateModeTodo}/>
           <AiFillDelete className='icon' onClick={deleteTodo}/>
       </div>
    </div>
  )
}

export default Todo;