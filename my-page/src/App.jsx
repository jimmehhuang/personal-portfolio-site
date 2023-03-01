import React, {useState} from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Projects from './components/Projects'


function App() {
  //const [state, setState] = useState(false);

  return (
    <div className="App">
      <header>
        <NavBar/>        
      </header>
      <div className="color-black">
        <Home/>
        {/* <About/>
        <Experience/>
        <Contact/>
        <Projects/> */}
      </div>
    </div>
  );
}

export default App;