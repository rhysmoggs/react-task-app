import { Button } from '@mui/material'
import React from 'react'

function Task({ showTasks, deleteTask }) {
  const handleClick = (info) => {
    deleteTask(info)
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
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Task
