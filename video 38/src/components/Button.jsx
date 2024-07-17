import React, { useContext } from 'react'
import Components1 from './Components1'
import { counterContext } from '../context/context'


const Button = () => {
    const value = useContext(counterContext)
  return (
    <div>
      <button onClick={() => value.setCount((count) => count + 1)}><span><Components1/></span>This is a button</button>
    </div>
  )
}

export default Button
