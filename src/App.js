import Header from './components/Header'
import Button from './components/Button'
import Task from './components/Task'

const App = () => {
  const handleClickFunction = (e) => {
    console.log(e.target)
  }

  return (
    <div className='wrapper'>
      <Header />
      <Task />
      <Button onClick={handleClickFunction} testProp='yaaay' />
    </div>
  )
}

export default App
