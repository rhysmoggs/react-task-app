import Header from './components/Header'
import AddTaskTest from './components/AddTaskTest'
import { Box } from '@mui/material'
import { useState } from 'react'
import Task from './components/Task'

const App = () => {
  const [taskData, setTaskData] = useState([])
  console.log(taskData)

  const addTask = (taskData) => {
    setTaskData(taskData)
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
      {taskData.length != 0 ? <Task showTasks={taskData} /> : null}

      {/* <p>{JSON.stringify(taskData)}</p> */}
    </Box>
  )
}

export default App
