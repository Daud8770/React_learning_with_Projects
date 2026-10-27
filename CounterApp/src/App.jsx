
import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  
  const[count,setcount] =useState(0);
  function decreaseHandler(){
    
       setcount(count-1);
  }
  function increaseHandler(){
       setcount(count+1);
  }
 function resetHandler(){
  setcount(0);
 }
  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-amber-100  flex-col gap-10'>
      <div className='text-blue-700 text-2xl font-medium '>Increment && Decrement</div>
      <div className='bg-white flex justify-center gap-12 py-3 rounded-sm text-[30px] text-black'> 
          <button onClick={decreaseHandler} className='border-r-2 text-center w-20 border-amber-50 text-5xl'>-</button>
          <div className='font-bold gap-12 text-5xl'>{count}</div>
      <button onClick={increaseHandler} className='border-r-2 text-center w-20 border-amber-50 text-5xl'>+</button>
      </div>
    
      <button onClick='resetHandler' className='bg-blue-700 text-white px-5 py-2 rounded-sm text-lg ' >Reset</button>
    </div>
  )
}

export default App
