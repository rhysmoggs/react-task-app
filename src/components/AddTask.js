import React from 'react'

function AddTask() {
  const handleSubmit = (e) => {
    //prevents form from submitting
    e.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Task:
          {/* <input type='text' value={state.value} onChange={handleChange} /> */}
          <input type='text' value='Bob' />
        </label>
      </div>
      <div>
        <label for='priority'>Priority:</label>
        <select id='cars' name='cars'>
          <option value='low'>low</option>
          <option value='medium'>medium</option>
          <option value='high'>high</option>
        </select>
      </div>
      <div>
        <label>
          Day:
          <input type='date' value='Tuesday' />
        </label>
      </div>
      {/* onSubmit, add form to state */}
      <input type='submit' value='Submit' />
    </form>
  )
}

export default AddTask
