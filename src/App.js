import Header from './components/Header'
import Content from './components/Content'
import Button from './components/Button'

const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Content />
      <Button testProp='yaaay' />
    </div>
  )
}

export default App
