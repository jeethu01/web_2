import React from 'react'
import { memo } from 'react'

const Navbar = ({adjective, getAdjective}) => {
  console.log("Navbar is rendering")
  return (
    <div>
      I am a good Navbar {adjective}
      <button onClick={()=>{getAdjective()}}>{getAdjective()}</button>
    </div>
  )
}

export default memo(Navbar)
