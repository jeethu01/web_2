import { useState } from 'react'
import './App.css'
import { useForm } from "react-hook-form"



function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async (data) => {
    // await delay(4)
    let r = await fetch("http://localhost:3000/", {method: "POST", body: JSON.stringify(data)})
    let res = r.text()
    console.log(data, res)

  }
  const delay = (d)=>{
return new Promise((resolve, reject)=>{
  setTimeout(() => {
    resolve()
  }, d * 1000);
})
  }

  return (
    <>
    {isSubmitting && <div>Loading......</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='username' {...register("username", { required: {value: true, message: "This field is required"}, minLength: {value: 3, message: "Because the minimum length is 3"}, maxLength: {value: 8, message: "The max length is 8"} })} type="text" />
          {errors.username && <div className='red'>{errors.username.message}</div>}
          <br />
          <input placeholder='password' {...register("password", {minLength: {value: 7, message: "The minimum password should be of length 8"}})} type="password" />
          {errors.password && <div className='red'>{errors.password.message}</div>}
          <br />
          <input disabled={isSubmitting} type="submit"  value="Submit"/>
        </form>
      </div>
    </>
  )
}

export default App
