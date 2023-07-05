import React from 'react'

function Task({ showTasks }) {
  return (
    <div className='container'>
      {showTasks.map((task) => (
        //change to individual task className styling?
        <div className='container'>
          <p>{task.task}</p>
          <p>{task.priority}</p>
          <p>{task.day}</p>
        </div>
      ))}
    </div>
  )
}

export default Task
