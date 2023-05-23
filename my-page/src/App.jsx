import React, { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  const [page, setPage] = useState(0)
  console.log(page);

  return (
    <div className="m-auto text-center text-white bg-gray-950 h-full">
      <NavBar updatePage={setPage}/>
      {page === 0 && <Home/>}
      {page === 1 && <About/>}
      {page === 2 && <Projects/>}
      {page === 3 && <Contact/>}
      <Footer/>
    </div>
  )
}

export default App
