import Header from './components/Header'
import Task from './components/Task'
import AddTask from './components/AddTask'
import { Box, Button } from '@mui/material'

const App = () => {
  const taskData = [
    { task: 'create this app', priority: 'high', day: 'monday' },
    { task: 'style app', priority: 'low', day: 'saturday' },
  ]

  const handleClickFunction = (e) => {
    console.log(e.target)
    const newTask = document.createElement('div')
    newTask.innerHTML = `<p>testing add new task</p>`
    document.body.append(newTask)
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
      <AddTask taskInfo={taskData} />
      <Task taskInfo={taskData} />
      <Button variant='contained' onClick={handleClickFunction}>
        Add Task
      </Button>
    </Box>
    // </div>
  )
}

export default App
