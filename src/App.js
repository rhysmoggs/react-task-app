import Header from './components/Header'
import AddTask from './components/AddTask'
import EditTask from './components/EditTask'
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
    //current tasks:
    console.log(taskData)
    //remove task with targeted id from all others:
    const result = taskData.filter((task) => task.id !== info)
    console.log('new array after deleting task = ', result)
    setTaskData(result)
  }
  const editTask = (info) => {
    //retrieves index info after button click on specific task
    console.log('test edit:', info)
    //find task based on id:
    const result = taskData.filter((task) => task.id === info)
    console.log('clg 1: ', result)
    setTaskData(result)
    console.log('clg 2: ', taskData)
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

      <AddTask changeData={addTask} />

      {/* if taskData is empty, hide Task component, otherwise, show it */}
      {taskData.length !== 0 ? (
        <Task
          showTasks={taskData}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ) : (
        'No Current Tasks'
      )}

      <EditTask editTaskData={editTask} />

      {/* <p>{JSON.stringify(taskData)}</p> */}
    </Box>
  )
}

export default App
