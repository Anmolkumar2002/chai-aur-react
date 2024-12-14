import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let[counter, setCounter] = useState(0)
  // let counter = 15

  const addValue = () => {
    // counter = counter + 1
    setCounter(counter + 1)
    // console.log("clicked", counter);  
  }

  const subtractValue = () => {
    setCounter(counter - 1)
  }
 
  return (
    <>
      <h1>Chai or React | Javascript</h1>
      <h2>Counter Value : {counter}</h2>
      <button
      onClick={addValue}>Add Value {counter}</button>
      <br />
      <button
      onClick={subtractValue}>Subtract Value {counter}</button>
    </>
  )
}

export default App
