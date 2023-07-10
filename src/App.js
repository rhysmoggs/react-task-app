import Header from './components/Header'
import AddTaskTest from './components/AddTaskTest'
import { Box } from '@mui/material'
import { useState } from 'react'
import Task from './components/Task'

const App = () => {
  const [taskData, setTaskData] = useState([])

  const addTask = (formData) => {
    // need to add form data and keep track of it, continuously adding to taskData state

    // update state with taskData from form
    setTaskData([...taskData, formData])
  }

  const deleteTask = (info) => {
    //retrieves index info after button click on specific task
    console.log(info)
    console.log('test parent')
    //filter index against taskData array?
    console.log(taskData)
    //problem: info is local index, not global and relvant to taskData array
    //need to create index as global variable so that it can be filtered
    const result = taskData.filter((task) => task.id !== info)
    console.log('new array after deleting task = ', result)
    setTaskData(result)
  }

  return (
    <Box
      sx={{
        maxWidth: '500px',
        margin: '30px auto',
        overflow: 'auto',
        minHeight: '300px',
        border: '1px solid blue',
        padding: '30px',
        borderRadius: '5px',
        backgroundColor: '#d9d9d9',
      }}
    >
      <Header />

      <AddTaskTest changeData={addTask} />

      {/* if taskData is empty, hide Task component, otherwise, show it */}
      {taskData.length !== 0 ? (
        <Task showTasks={taskData} deleteTask={deleteTask} />
      ) : (
        'No Current Tasks'
      )}

      {/* <p>{JSON.stringify(taskData)}</p> */}
    </Box>
  )
}

export default App
