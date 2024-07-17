// import './App.css'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import Card from './components/Card.jsx'

function App() {


  return (
    <>
      <Navbar />
      <div className="cards">
        <Card title="Card 1" description = "Desc 1" src="https://www.shutterstock.com/image-photo/digital-technology-software-development-concept-600nw-2111828198.jpg"/>
        <Card title="Card 2" description = "Desc 2" src="https://media.istockphoto.com/id/1356364268/photo/close-up-focus-on-persons-hands-typing-on-the-desktop-computer-keyboard-screens-show-coding.jpg?s=612x612&w=0&k=20&c=4R_9mWq9KzgpC_pVBMMM0FNzw1L-NyFLa7tDqFInMGs="/>
        <Card title="Card 3" description = "Desc 3" src="https://static.vecteezy.com/system/resources/thumbnails/002/099/443/small/programming-code-coding-or-hacker-background-programming-code-icon-made-with-binary-code-digital-binary-data-and-streaming-digital-code-vector.jpg"/>
        <Card title="Card 4" description = "Desc 4" src="https://burst.shopifycdn.com/photos/finger-pointing-at-javascript-code.jpg?width=1000&format=pjpg&exif=0&iptc=0"/>
       
      </div>
      hello world
      <Footer />
    </>
  )
}

export default App
