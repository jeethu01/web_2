import React, {useEffect} from 'react'

const Navbar = ({color}) => {
    useEffect(() => {
      alert("color was changed")
      return()=>{
        alert("component was unmounted")
      }
    }, [color])
    
  return (
    <div>
      I am a navbar of {color} color
    </div>
  )
}

export default Navbar
