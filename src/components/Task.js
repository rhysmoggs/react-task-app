import React from 'react'

function Task({ taskInfo }) {
  return (
    <div className='task'>
      {taskInfo.map((task) => (
        //change to individual task className styling?
        <div className='task'>
          <p>{task.task}</p>
          <p>{task.priority}</p>
          <p>{task.day}</p>
        </div>
      ))}
    </div>
  )
}

export default Task
