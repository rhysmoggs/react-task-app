import React from 'react'

function Task({ showTasks }) {
  return (
    <div className='container'>
      <ul>
        {showTasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  )
}

export default Task
