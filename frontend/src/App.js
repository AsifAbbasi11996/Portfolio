import './App.css';
import { Routes, Route } from 'react-router-dom'

// components
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import About from './components/About.js';
import Timeline from './components/Timeline.js';
import Contact from './components/Contact.js'
import Projects  from './components/Projects.js'
import Footer from './components/Footer.js'



function App() {
  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/timeline' element={<Timeline />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/footer' element={<Footer />} />
      </Routes>
    </>
  );
}

export default App;
