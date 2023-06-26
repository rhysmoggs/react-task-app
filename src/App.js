import Header from './components/Header'
import Task from './components/Task'
import AddTask from './components/AddTask'
import { Box, Button } from '@mui/material'
import { useState } from 'react'

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
      {showAddTask ? <AddTask taskInfo={taskData} /> : null}
      <Task taskInfo={taskData} />
      <Button variant='contained' onClick={handleClickFunction}>
        Add Task
      </Button>
    </Box>
    // </div>
  )
}

export default App
