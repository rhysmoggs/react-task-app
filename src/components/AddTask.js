import React, { useState } from 'react'

function AddTask() {
  const [task, setTask] = useState('')

  const handleSubmit = (e) => {
    //prevents form from submitting
    e.preventDefault()
    //log state to console after form submission click
    console.log(task)
  }

  //check if form is valid

  return (
    // handleSubmit function, add completed form to state
    <form className='container' onSubmit={handleSubmit}>
      <div>
        <label>
          Task:
          {/* <input type='text' value={state.value} onChange={handleChange} /> */}
          <input
            type='text'
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor='priority'>Priority:</label>
        <select id='priority' name='priority'>
          <option value='low'>low</option>
          <option value='medium'>medium</option>
          <option value='high'>high</option>
        </select>
      </div>
      <div>
        <label>
          Day:
          <input type='date' />
        </label>
      </div>
      <input type='submit' value='Submit' />
    </form>
  )
}

export default AddTask
