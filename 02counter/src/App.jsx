import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App(){
  let [counter, setCounter] = useState(5)
  let [name,setName] = useState('shambhavi')

 // let counter = 5

  const addValue = () =>{
    //console.log("value added")
    if(counter <30){
    counter = counter + 1
    setCounter(counter)
    }
    else if(counter >=30){
      alert("you exceed the limit")
    }
  
  }
  const decreaseValue = () =>{
    //console.log("value added")
    if(counter > 0){
    counter = counter - 1
    setCounter(counter)
    }
    else if(counter == 0){
      alert("you exceed the limit")
    }
  }
  const nameChange = () =>{
    setName (name === 'shambhavi' ? 'shubhi': 'shambhavi')
  
  }
  return (
    <>
      <h1> Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>
      <button
      onClick={addValue}>Add Value : {counter}</button>
      <br></br>
      <button
      onClick={decreaseValue}>Decrease Value : {counter}</button>
      <br>
      </br>
      <h1>  {name}</h1>
      <button
      onClick={nameChange}>Click me</button>
    </>
  )
}

export default App
