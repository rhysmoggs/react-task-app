import React, { useState } from 'react'

function AddTask({ taskInfo }) {
  //put all into one useState? or get all individually, then add to one state later?
  const [task, setTask] = useState('')
  const [priority, setPriority] = useState('')
  const [day, setDay] = useState('')

  const handleSubmit = (e) => {
    //prevents form from submitting
    e.preventDefault()
    //check if form is valid

    //log state to console after form submission click
    console.log(`${task}, ${priority}, ${day}`)
    //add form data to state
    const newTask = { task, priority, day }
    console.log(newTask)
    //pass state as props to OG array? or bring OG array as props here,
    //then update here.
    // console.log({ ...taskInfo, newTask })
    taskInfo = { ...taskInfo, newTask }
    console.log(taskInfo)
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
        {/* <label htmlFor='priority'>Priority:</label>
        <select id='priority' name='priority'>
          <option value='low'>low</option>
          <option value='medium'>medium</option>
          <option value='high'>high</option>
        </select> */}
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
          {/* <input type='date' /> */}
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

export default AddTask
