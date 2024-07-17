# Why React ?
- We can use states which means that once we update the state variable, it changes across the page.
- We can split our app into multiple components and reuse those components.
- React uses a virtual DOM to efficiently update the UI which is better than updating content using Dom manipulation. 
- Debugging and maintainace is easy.

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>


```
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Footer from './components/footer';
import Navbar from './components/navbar';

function App() {
  const[value, setValue] = useState(0)
  return (
    <div className="App">
<Navbar logoText="CodeWithJeethu"/>
     <div className="value">{value}</div>
     <button onClick={()=>{setValue(value + 1)}}>Click me</button>
     <Footer/>
    </div>
  );
}

export default App;
```