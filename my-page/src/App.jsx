import React, { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'

function App() {
  const [page, setPage] = useState(0)
  console.log(page);

  return (
    <div className="m-auto text-center text-white bg-gray-950 min-h-fit">
      <header>
        <NavBar updatePage={setPage}/>
      </header>
        {page === 0 && <Home/>}
        {page === 1 && <About/>}
        {page === 2 && <Projects/>}
        {page === 3 && <Contact/>}
    </div>
  )
}

export default App
