import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Manager from './components/Manager'
import './App.css'

function App() {
  

  return (
    <>
    <Navbar/>
    <div className='min-h-[85vh]'>

      <Manager/>
    </div>
      <Footer/>
    </>
  )
}

export default App
