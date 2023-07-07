import React from 'react'

function Task({ showTasks }) {
  return (
    <div className='container'>
      {showTasks.map((task, index) => (
        <div key={index} className='container'>
          <ul>
            <li>{task.task}</li>
            <li>{task.priority}</li>
            <li>{task.day}</li>
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Task
