//HOOK IN REACT
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setvalue] = useState(0)
  // Use State is Used in React to interact with the Html in the scene 
  // let value = 10
  function Increase(){
    // value = value+1
    if(value < 20){
      setvalue(value+1)
    }else{
      alert("Sorry!! Can't Increment further")
    }
  }
  const decrease = () =>{
    if(value != 0){
      setvalue(value-1)
    }else{
      alert("Can't decreased further!!!")
    }
  }
  return (
    <>
      <h1>Setting Counter Variable</h1>
      <p>Counter value : {value}</p>
      <button onClick={Increase}>
        Increment Button
      </button>
      <br />
      <button onClick ={decrease}>
        Decrement Button
      </button>

    </>
  )
}

export default App
