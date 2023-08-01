import { Button } from '@mui/material'
import React from 'react'

function Task({ showTasks, deleteTask, editTask }) {
  const handleClick = (info) => {
    deleteTask(info)
  }
  const handleEdit = (edited) => {
    console.log(edited)
    // editTask('whaaat')
    editTask(edited)
    console.log('this is: ' + edited)
  }

  return (
    <div className='container'>
      {showTasks.map((task, index) => (
        <div key={index} className='container'>
          <ul>
            <li>{task.task}</li>
            <li>{task.priority}</li>
            <li>{task.day}</li>
            <Button onClick={() => handleClick(task.id)} variant='contained'>
              Delete
            </Button>
            <Button onClick={() => handleEdit(task.id)} variant='contained'>
              Edit
            </Button>
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Task
