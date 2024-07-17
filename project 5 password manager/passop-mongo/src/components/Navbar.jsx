import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white'>
        <div className="mycontainer flex items-center justify-between px-4 h-14 py-5">

        <div className="logo font-bold text-2xl">
            <span className='text-green-500'>&lt;</span>
            <span>Pass</span><span className='text-green-500'>OP/&gt;</span>
        </div>
        {/* <ul>
            <li className='flex gap-4'>
                <a className='hover:font-bold cursor-pointer' href="/">Home</a>
                <a className='hover:font-bold cursor-pointer' href="/">About</a>
                <a className='hover:font-bold cursor-pointer' href="/">Contact us</a>
            </li>
        </ul> */}
        {/* <img src="/icons/github.svg" className='p-5 invert w-16' alt="github logo" /> */}
        <button className='text-white bg-green-700 my-5 mx-2 rounded-full flex  justify-between items-center ring-white ring-1'> 
                    <img className='w-10 invert p-1' src="/icons/github.svg" alt="github logo" />
                    <span className='font-bold px-2'>GitHub</span>
                    
                </button>
        </div>

    </nav>
  )
}

export default Navbar
