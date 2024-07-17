import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(false)
  const [todos, settodo] = useState([{
    title: "Hey",
    desc: "I am a todo"
  },
  {
    title: "Hello",
    desc: "I am also a todo"
  },
  {
    title: "Hey Hello",
    desc: "I am fastest todo"
  }])

  // const btnref = useRef()

  // useEffect(()=>{
  //   btnref.current.style.background = "Red"
  //   console.log(`Hello world`)
  // },[])
  const Todo = ({todo}) => {
    return (<>
      <div className="todo">{todo.title}</div>
      <div className="todo">{todo.desc}</div>
    </>)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {todos.map(todo=>{
        return <Todo todo={todo}/>
      })}
      {showbtn ? <button>showbtn is true</button> : <button>showbtn is false</button>}
      {/* {showbtn && <button>when showbtn is true</button>} */}
      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/* <button onClick={()=>{btnref.current.style.display = "none"}}>Remove count</button> */}
    </>
  )
}

export default App
