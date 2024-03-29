import { useState , useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number , setNumber] = useState(false)
  const [ character, setCharacter] = useState(false)
  const[ password , setPassword] = useState("")
  const [buttonColor, setButtonColor] = useState('bg-blue-700');
  //ref hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str+= "0123456789"
    if(character) str+="!@#$%^&*-+[]{}`" 
    for(let i=1 ; i<=length ; i++){
      let char = Math.floor(Math.random() * str.length + 1)
         pass += str.charAt(char)
    }

    setPassword(pass)
  } , [length, number, character, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
    setButtonColor("bg-red-700")
    setTimeout( ()=> {
      setButtonColor("bg-blue-700")
    } , 1000)
  },[password])

     
  useEffect( () => {
    passwordGenerator()
  },[length,number,character,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3 mt-4'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readonly
          ref={passwordRef} />
          <button 
          onClick={copyPasswordToClipboard}
          className={`outline-none text-white px-3 py-1 shrink-0 ${buttonColor}`}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2 mb-3'>
          <div className='flex items-center gap-x-1 mb-4'>
            <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length : {length} </label>
          </div>
          <div className='flex items-center gap-x-1 mb-4'>
            <input
            type = "checkbox"
            defaultChecked={setNumber}
            id="numberInput"
            onChange={()=>{
            setNumber((prev) => !prev);
          }
        }
        />
        <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1 mb-4'>
            <input
            type = "checkbox"
            defaultChecked={setCharacter}
            id="charInput"
            onChange={()=>{
            setCharacter((prev) => !prev);
          }
        }
        />
        <label htmlFor='charInput'>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
