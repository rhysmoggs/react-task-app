const Button = ({ testProp }) => {
  const handleClickFunction = (e) => {
    console.log(e.target)
    alert(`'You clicked me, ${testProp}!`)
  }

  return (
    <>
      <button onClick={handleClickFunction}>Add Task</button>
    </>
  )
}

export default Button
