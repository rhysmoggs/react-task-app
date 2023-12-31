import React, { useState } from 'react'

function EditTask({ editTaskData }) {
  const [task, setTask] = useState('')
  const [priority, setPriority] = useState('')
  const [day, setDay] = useState('')

  const handleSubmit = (e) => {
    //prevents form from submitting
    e.preventDefault()
    //udate:
    editTaskData({ ...editTaskData, task, priority, day })
  }

  return (
    // handleSubmit function, add completed form to state
    <form className='container' onSubmit={handleSubmit}>
      <div>
        <label>
          Task:
          <input
            type='text'
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Priority:
          <input
            type='text'
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Day:
          <input
            type='text'
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </label>
      </div>
      <input type='submit' value='Submit' />
    </form>
  )
}

export default EditTask
