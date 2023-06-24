import Header from './components/Header'
import Button from './components/Button'
import Task from './components/Task'
import AddTask from './components/AddTask'

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
      <Button onClick={handleClickFunction} testProp='yaaay' />
    </div>
  )
}

export default App
