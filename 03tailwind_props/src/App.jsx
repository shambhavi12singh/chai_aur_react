import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'


function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username: "shambhavi",
    password : 123456
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'>Tailwind CSS</h1>
      <Cards  channel ="chaiaurcode" />
      <Cards />
      
    </>
  )
}

export default App
