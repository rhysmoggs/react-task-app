import Header from './components/Header'
import AddTaskTest from './components/AddTaskTest'
import { Box } from '@mui/material'
import { useState } from 'react'

const App = () => {
  const [taskData, setTaskData] = useState([])
  console.log(taskData)

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

      <AddTaskTest changeData={(taskData) => setTaskData(taskData)} />

      <ul>
        {taskData.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>

      {/* <p>{JSON.stringify(taskData)}</p> */}
    </Box>
    // </div>
  )
}

export default App
