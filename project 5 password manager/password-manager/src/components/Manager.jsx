import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
  const ref = useRef()
  const passwordRef = useRef()
  const [form, setform] = useState({ site: "", username: "", password: "" })
  const [passwordArray, setPasswordArray] = useState([])

  useEffect(() => {
    let passwords = localStorage.getItem("passwords")

    if (passwords) {
      setPasswordArray(JSON.parse(passwords))
    }

  }, [])

  const copyText = (text) => {
    // alert("copied to clipboard" + text)
    navigator.clipboard.writeText(text)
  }


  const showPassword = () => {
    passwordRef.current.type = "text"
    if (ref.current.src.includes("icons/crosseye.png")) {

      ref.current.src = "icons/eye.png.png"
      passwordRef.current.type = "password"
    }
    else {
      ref.current.src = "icons/crosseye.png"
      passwordRef.current.type = "text"
    }
  }

  const savePassword = () => {
    // console.log(form)
    if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {

      setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
      localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
      console.log([...passwordArray, form])
      setform({ site: "", username: "", password: "" })
    }
  }
  const deletePassword = (id) => {
    console.log("deleting with id", id)
    // // console.log(form)
    let c = confirm("Do you really want to delete this password")
    if (c) {

      setPasswordArray(passwordArray.filter(item => item.id !== id))
      localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))
      
    }
    // console.log([...passwordArray, form])
  }

  const editPassword = (id) => {
    console.log("editing the password", id)
    setform(passwordArray.filter(i => i.id === id)[0])
    setPasswordArray(passwordArray.filter(item => item.id !== id))
  }


  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }



  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>
      <div className='p-2 md:p-0 md:mycontainer mycontainer min-h-[88.2vh] '>
        <h1 className='text-4xl text font-bold text-center'>

          <span className='text-green-500'>&lt;</span>
          <span>Pass</span><span className='text-green-500'>OP/&gt;</span>
        </h1>
        <p className='text-lg text-green-900 text-center'>Your own password manager</p>
        <div className='text-black flex flex-col p-4 gap-8 items-center'>
          <input value={form.site} onChange={handleChange} placeholder='Enter Website URL' className='rounded-full border border-green-500 w-full py-1 p-4' name='site' type="text" />
          <div className='flex flex-col md:flex-row w-full gap-8'>
            <input value={form.username} onChange={handleChange} placeholder='Enter username' className='rounded-full border border-green-500 w-full py-1 p-4' name='username' type="text" />
            <div className="relative">

              <input value={form.password} onChange={handleChange} placeholder='Enter password' className='rounded-full border border-green-500 w-full py-1 p-4' name='password' type="password" ref={passwordRef} />
              <span className='absolute right-2 cursor-pointer top-[1px] p-1' onClick={showPassword}>
                <img ref={ref} src="icons/eye.png.png" width={26} alt="eye" />
              </span>
            </div>
          </div>
          <button onClick={savePassword} className='bg-green-400 gap-2 w-fit rounded-full flex items-center border border-green-900 justify-center px-8 py-2 hover:bg-green-300'>
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover">
            </lord-icon>
            Add Password</button>
        </div>
        <div className="passwords">
          <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
          {passwordArray.length === 0 && <div>No passwords to show</div>}
          {passwordArray.length != 0 && <table className="table-auto w-full rounded-md overflow-hidden mb-10">
            <thead className='bg-green-800 text-white'>
              <tr>
                <th className='py-2'>Site</th>
                <th className='py-2'>Username</th>
                <th className='py-2'>Password</th>
                <th className='py-2'>Actions</th>
              </tr>
            </thead>
            <tbody className='bg-green-100'>
              {passwordArray.map((item, index) => {
                return <tr key={index}>
                  <td className='flex items-center justify-center border border-white py-2 text-center'><a href={item.site} target='_blank'>{item.site}
                  </a>
                    <div className='cursor-pointer size-7 lordiconcopy' onClick={() => { copyText(item.site) }}>
                      <Lord-icon
                        style={{ "height": "25px", "weight": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                        src="https://cdn.lordicon.com/iykgtsbt.json" trigger="hover"></Lord-icon>

                    </div>
                  </td>
                  <td className='border border-white py-2 text-center'>
                    <div className='flex items-center justify-center'>

                      <span>{item.username}</span>
                      <div className='cursor-pointer size-7 lordiconcopy' onClick={() => { copyText(item.username) }}>
                        <Lord-icon
                          style={{ "height": "25px", "weight": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                          src="https://cdn.lordicon.com/iykgtsbt.json" trigger="hover"></Lord-icon>

                      </div>
                    </div>
                  </td>
                  <td className='border border-white py-2 text-center'>
                    <div className='flex justify-center items-center'>
                      <span>{item.password}</span>

                      <div className='cursor-pointer size-7 lordiconcopy' onClick={() => { copyText(item.password) }}>
                        <Lord-icon
                          style={{ "height": "25px", "weight": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                          src="https://cdn.lordicon.com/iykgtsbt.json" trigger="hover"></Lord-icon>

                      </div>
                    </div>
                  </td>
                  <td className='border border-white py-2 text-center'>
                    <div className='flex justify-center items-center'>
                      <span className='cursor-pointer mx-1' onClick={() => { editPassword(item.id) }}>
                        <Lord-icon
                          style={{ "height": "25px", "weight": "25px" }}
                          src="https://cdn.lordicon.com/gwlusjdu.json" trigger="hover"></Lord-icon>
                      </span>
                      <span className='cursor-pointer mx-1' onClick={() => { deletePassword(item.id) }}>
                        <Lord-icon
                          style={{ "height": "25px", "weight": "25px" }}
                          src="https://cdn.lordicon.com/skkahier.json" trigger="hover"></Lord-icon>
                      </span>
                    </div>

                  </td>
                </tr>
              })}

            </tbody>
          </table>}
        </div>
      </div>
    </>
  )
}

export default Manager
