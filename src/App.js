import Header from './components/Header'
import Task from './components/Task'
import AddTask from './components/AddTask'
import { Box, Button } from '@mui/material'
import { useState } from 'react'
import TestAddTask from './components/TestAddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)

  const taskData = [
    { task: 'create this app', priority: 'high', day: 'monday' },
    { task: 'style app', priority: 'low', day: 'saturday' },
  ]

  const handleClickFunction = (e) => {
    console.log(e.target)
    setShowAddTask(!showAddTask)
  }

  const pull_data = (data) => {
    console.log(data) // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
    const newBlock = document.createElement('h4')
    newBlock.innerHTML = `hey there ${data}`
    document.body.append(newBlock)
  }

  //linked to test on AddTask component
  const get_data = (data) => {
    console.log(data) // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
    const newBlock = document.createElement('h2')
    newBlock.innerHTML = `this is working, look: ${data}`
    document.body.append(newBlock)
  }

  return (
    // <div className='wrapper'>
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
      <TestAddTask func={pull_data} />
      <Button variant='contained' onClick={handleClickFunction}>
        Add Task
      </Button>
      {showAddTask ? <AddTask taskInfo={get_data} /> : null}
      <Task taskInfo={taskData} />
    </Box>
    // </div>
  )
}

export default App
