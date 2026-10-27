import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [text,setText]=useState('');

  function changehandler(event){
    console.log(text);
    setText(event.target.value);
  }
  return (
    <div>
      <input type='text' onChange={changehandler}></input>
    </div>
  )
}

export default App
