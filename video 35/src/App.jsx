import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setname] = useState("Jeethu")
  // const [form, setform] = useState({email: "",phone: ""})
  const [form, setform] = useState({})
  const handleClick = ()=>{
    alert("Hey i am clicked")
  }
  const handlemouse = ()=>{
    alert("I will come when you take the mouse on classname = red")
  }
  const handleChange = (e)=>{
    // setname(e.target.value)
    setform({...form, [e.target.name]:e.target.value})
    console.log(form)
  }

  return (
    <>
    <div className="button">

    <button onClick={handleClick}>Click me</button>
    </div>
    {/* <div className="red" onMouseOver={handlemouse}>
      I am a red 
    </div> */}
    {/* <input type="text" value={name} onChange={handleChange} /> */}
    {/* <input type="text" name='email' value={form.email} onChange={handleChange} /> */}
    {/* <input type="text" name='phone' value={form.phone} onChange={handleChange} /> */}
    <input type="text" name='email' value={form.email?form.email: ""} onChange={handleChange} />
    <input type="text" name='phone' value={form.phone?form.phone: ""} onChange={handleChange} />

    </>
  )
}

export default App
