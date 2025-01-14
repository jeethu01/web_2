import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useSelector, useDispatch } from 'react-redux'
import Navbar from './components/Navbar'
import './App.css'
import { increment, decrement, multiply, incrementByAmount } from './redux/counter/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
        <Navbar/>
      <div>
        <button onClick={()=> dispatch(decrement())}>-</button>
The current value is {count}
<button onClick={()=> dispatch(increment())}>+</button>
<button onClick={()=> dispatch(multiply())}>*</button>
      </div>
    </>
  )
}

export default App
