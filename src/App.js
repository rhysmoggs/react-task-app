import Header from './components/Header'
import Task from './components/Task'
import AddTask from './components/AddTask'
import { Button } from '@mui/material'

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
    <div className='wrapper'>
      <Header />
      <AddTask />
      <Task taskInfo={taskData} />
      {/* <Button onClick={handleClickFunction} testProp='yaaay' /> */}
      <Button variant='contained' onClick={handleClickFunction}>
        Add Task
      </Button>
    </div>
  )
}

export default App
