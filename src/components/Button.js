//pass in testProp and onClick handleClickFunction as prop in Button component on App.js
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
