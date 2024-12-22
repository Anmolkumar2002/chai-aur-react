import { useState } from 'react'
import './App.css'
import React from 'react'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    userName : "Anmol",
    age : 21
  }
  let newArray = [1, 2, 3, 4]

  return (
    <>
      
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4 '>TailWind Test</h1>
      <Card userName="chai aur code" btnText="visit me.."/>
      <Card userName="Anmol" btnText="click me.."/>
      
    </>
  )
}

export default App
