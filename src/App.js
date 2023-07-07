import Header from './components/Header'
import AddTaskTest from './components/AddTaskTest'
import { Box } from '@mui/material'
import { useState } from 'react'
import Task from './components/Task'

const App = () => {
  const [taskData, setTaskData] = useState([
    // {
    //   task: 'testing',
    //   priority: 'low',
    //   day: 'tomorrow',
    // },
  ])
  console.log(taskData)

  const addTask = (formData) => {
    // need to add form data and keep track of it, continuously adding to taskData state

    // update state with taskData from form
    setTaskData([...taskData, formData])
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
      {taskData.length != 0 ? (
        <Task showTasks={taskData} />
      ) : (
        'No Current Tasks'
      )}

      {/* <p>{JSON.stringify(taskData)}</p> */}
    </Box>
  )
}

export default App
