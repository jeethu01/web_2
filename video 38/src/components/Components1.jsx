import React,{ useContext } from 'react'
import { counterContext } from '../context/context'

const Components1 = () => {
    const value = useContext(counterContext)
  return (
    <>
    <div>
      I am a component {value.count}
    </div>
    </>
  )
}

export default Components1
