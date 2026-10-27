import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

// const[firstName,setFirstName]=useState("");
// const [LastName,setLastName]=uses("");


//   function changeHandler(event){
//     // console.log("printing first Name");
//     // console.log(event.target.value);
//     setFirstName(event.target.value);
//   }

//   function changeSHandler(event){
//   //  console.log("printing lastname");
//   //   console.log(event.target.value);
//     setLastName(event.target.value);
//   }
const [formData,setFormData]=useState(  {firstName:"",lastName:"",email:""});

function changeHandler(event)
{
  setFormData(prevFormData=>
  {
    return{
 ...prevFormData,
    [event.target.name]:event.target.value 
    }
   
  }
  );
}



  return (
    <div>
      <form>
        <input type="text"
        placeholder='firstname' 
        onChange={changeHandler}>
        name="fistName"
        </input>

        <input type="text"
        placeholder='lastname' 
        onChange={changeHandler}>
        name="lastName"
        </input>

        <br></br>
        <input type='email'
        placeholder='enter you email here '
        onChange={changeHandler}
        name="email">

        </input>
      </form>
    </div>
             
  )
}

export default App
