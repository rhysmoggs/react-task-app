const Button = ({ testProp, onClick }) => {
  return (
    <div>
      <button onClick={onClick} className='btn'>
        {testProp}
      </button>
    </div>
  )
}

export default Button
