import { useState } from 'react'
import './App.css'

function App() {
let [counter, setCounter] = useState(0)
const addValue = () => {
  setCounter(counter+1 <=108?counter+1:0)
}
const remValue = () =>{
  setCounter(counter-1 >=0?counter-1: 0)
}
  return (
    <>
    <h1>Chai aur React</h1>
    <p>108 Counter</p>
    <h2>Counter Value: {counter}</h2>
    <button
    onClick={addValue}>Increase</button>
    <br />
    <button
    onClick={remValue}>Decrease</button>
    </>
  )
}

export default App
